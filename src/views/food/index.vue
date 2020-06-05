<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.name" placeholder="名称" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <!-- <el-select v-model="listQuery.importance" placeholder="状态" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
      </el-select> -->
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        新增
      </el-button>
      <!-- <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        导出
      </el-button> -->
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="250px" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="名字">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="分类" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.category }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            修改
          </el-button>
          <el-button v-if="row.status!='下架'" size="mini" type="danger" @click="handleStatus(row,'下架')">
            下架
          </el-button>
          <el-button v-if="row.status!='正常'" size="mini" type="success" @click="handleStatus(row,'正常')">
            正常
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row,$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" center>
      <el-form ref="dataForm" :rules="rules" :model="food" label-position="left" label-width="80px" style="width: 400px; margin-left:50px;">
        <!-- <el-form-item label="Type" prop="type">
          <el-select v-model="food.type" class="filter-item" placeholder="Please select">
            <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
          </el-select>
        </el-form-item> -->
        <el-form-item label="创建时间" prop="createTime">
          <el-date-picker v-model="food.createTime" type="datetime" placeholder="创建日期" />
        </el-form-item>
        <el-form-item label="分类" prop="category">
          <el-select v-model="food.category" class="filter-item" placeholder="请选择分类">
            <el-option v-for="category in categoryOptions" :key="category" :label="category" :value="category" />
          </el-select>
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="food.name" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="food.status" class="filter-item" placeholder="请选择">
            <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          确认
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { getfoodListPage, addfood, updatefood } from '@/api/food'
import { getList, addMockFood, updateMockFood } from '@/api/food' // data from Mock
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        '正常': 'success',
        '下架': 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        name: undefined
      },
      categoryOptions: ['甜食', '饭类', '粉类', '烧烤', '西餐类'],
      statusOptions: ['正常', '下架'],
      food: {
        id: undefined,
        name: '',
        status: '',
        createTime: new Date(),
        categoryId: ''
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '修改',
        create: '新增'
      },
      dialogPvVisible: false,
      downloadLoading: false,
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        category: [{ required: true, message: '请选择分类', trigger: 'change' }],
        status: [{ required: true, message: '请选择状态', trigger: 'change' }],
        createTime: [{ type: 'date', required: true, message: '请选择创建时间', trigger: 'change' }],
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getList(this.listQuery.name).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.total = response.data.total
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 1000)
      })
      // getFoodListPage({
      //   page: this.listQuery.page,
      //   limit: this.listQuery.limit
      // }).then(response => {
      //   this.list = response.data.list
      //   this.total = response.data.total
      //   this.listLoading = false
      // }).catch(error => console.log(error))
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleDownload() {
      this.downloadLoading = true
      console.log('下载')
      this.downloadLoading = false
    },
    resetFood() {
      this.food = {
        id: undefined,
        name: '',
        status: '',
        createTime: new Date(),
        categoryId: ''
      }
    },
    handleCreate() {
      this.resetFood()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.food.id = parseInt(Math.random() * 100) + 1024 // mock a id
          addMockFood(this.food).then(() => {
            this.food.createTime = parseTime(this.food.createTime, '{y}-{m}-{d} {h}:{i}:{s}')
            this.list.unshift(this.food)
            this.dialogFormVisible = false
            this.$notify({
              title: '提示',
              message: '新增成功',
              type: 'success',
              duration: 1000
            })
          })
        }
      })
    },
    handleUpdate(row) {
      this.food = Object.assign({}, row) // copy obj
      this.food.createTime = new Date(this.food.createTime)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.food)
          this.food.createTime = parseTime(+new Date(tempData.createTime)) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateMockFood(tempData).then(() => {
            const index = this.list.findIndex(v => v.id === this.food.id)
            this.list.splice(index, 1, this.food)
            this.dialogFormVisible = false
            this.$notify({
              title: '提示',
              message: '修改成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleDelete(row, index) {
      this.$confirm('确定要删除<strong>' + row.name + '</strong>吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        dangerouslyUseHTMLString: true,
        type: 'warning'
      }).then(() => {
        this.$notify({
          title: '提示',
          message: '删除成功!',
          type: 'success',
          duration: 2000
        })
        this.list.splice(index, 1)
      }).catch(() => {
        this.$notify({
          title: '提示',
          message: '已取消删除',
          type: 'info',
          duration: 2000
        })
      })
    },
    handleStatus(row, status) {
      this.$confirm('确定要修改<strong>' + row.name + '</strong>为' + status + '吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        dangerouslyUseHTMLString: true,
        type: 'warning'
      }).then(() => {
        this.$notify({
          title: '提示',
          message: '修改成功',
          type: 'success',
          duration: 2000
        })
        row.status = status
      }).catch(() => {
        // 取消操作
      })
    }
  }
}
</script>
