<template>
  <div class="app-container">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm" style="padding: 2em;">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="必胜客" value="shanghai" />
          <el-option label="金拱门" value="beijing" />
          <el-option label="肯德基" value="beijing" />
          <el-option label="自助餐" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
          </el-form-item>
        </el-col>
        <el-col :span="2" style="text-align: center;">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker v-model="ruleForm.date2" placeholder="选择时间" style="width: 100%;" />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type" />
          <el-checkbox label="地推活动" name="type" />
          <el-checkbox label="线下主题活动" name="type" />
          <el-checkbox label="单纯品牌曝光" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助" />
          <el-radio label="线下场地免费" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <div class="tip-normal">
      <h4>分步型表单</h4>
    </div>

    <el-steps :active="stepForm.active" finish-status="success" style="padding: 0 10%">
      <el-step title="步骤 1" />
      <el-step title="步骤 2" />
      <el-step title="步骤 3" />
    </el-steps>
    <el-form ref="stepForm" :model="stepForm" :rules="rules" label-width="100px" class="demo-ruleForm" style="padding: 20px 10%;text-align:center">
      <div class="el-input" style="width: 300px;">
        <el-form-item v-show="stepForm.active === 0" label="年龄" prop="age">
          <el-input
            v-model="stepForm.age"
            type="num"
            placeholder="请输入年龄"
            maxlength="3"
            show-word-limit
            clearable
          />
        </el-form-item>
        <el-form-item v-show="stepForm.active === 1" label="身高" prop="height">
          <el-input
            v-model="stepForm.height"
            type="num"
            placeholder="请输入身高(CM)"
            maxlength="3"
            show-word-limit
            clearable
          />
        </el-form-item>
        <el-form-item v-show="stepForm.active === 2" label="体重" prop="weight">
          <el-input
            v-model="stepForm.weight"
            type="num"
            placeholder="请输入体重"
            show-word-limit
            clearable
          />
        </el-form-item>
      </div>
      <div>
        <el-button style="margin-top: 20px;" @click="next('stepForm')">下一步</el-button>
      </div>

    </el-form>

  </div>
</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (value === '' && this.stepForm.active === 0) {
        callback(new Error('请输入年龄'))
      } else {
        callback()
      }
    }
    var checkHeight = (rule, value, callback) => {
      if (value === '' && this.stepForm.active === 1) {
        callback(new Error('请输入高度'))
      } else {
        callback()
      }
    }
    var checkWeight = (rule, value, callback) => {
      if (value === '' && this.stepForm.active === 2) {
        callback(new Error('请输入体重'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ],
        height: [
          { validator: checkHeight, trigger: 'blur' }
        ],
        weight: [
          { validator: checkWeight, trigger: 'blur' }
        ]
      },
      stepForm: {
        active: 0,
        age: '',
        height: '',
        weight: ''
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    next(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.stepForm.active++
          if (this.stepForm.active === 3) {
            this.$notify({
              title: '提示',
              message: '已完成所有信息填写',
              type: 'success'
            })
            this.stepForm.active = 0
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>
