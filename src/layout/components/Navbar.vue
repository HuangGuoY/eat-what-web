<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="@/images/menu.png" class="menu-icon">
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item @click.native="dialog = true">
            <img src="@/images/weather.png" class="dropdown-icon">天气
          </el-dropdown-item>
          <el-dropdown-item @click.native="todoDialogVisible = true">
            <img src="@/images/notepad.png" class="dropdown-icon">备忘录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/64/h/46'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              回到首页
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item @click.native="dialog = true">
            修改信息
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <el-drawer
      ref="drawer"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="rtl"
      custom-class="drawer"
      size="30%"
    >
      <div class="drawer__content" style="flex: 1;padding:25px">
        <el-form ref="form" :model="form" status-icon :rules="rules" label-position="left" label-width="80px" class="demo-form">
          <el-form-item label="新密码">
            <el-input v-model="form.password" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPassword">
            <el-input v-model="form.checkPassword" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model.number="form.age" />
          </el-form-item>
        </el-form>
      </div>
      <div class="drawer__footer" style="text-align: center;">
        <el-button style="width: 40%" @click="cancelForm">取 消</el-button>
        <el-button type="primary" style="width: 40%" @click="submitForm('form')">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
      </div>
    </el-drawer>

    <el-dialog
      title="备忘录"
      :visible.sync="todoDialogVisible"
      width="30%"
      center
    >
      <TodoList />
    </el-dialog>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import TodoList from '@/components/TodoList'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    TodoList
  },
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      table: false,
      dialog: false,
      todoDialogVisible: false,
      loading: false,
      form: {
        name: '',
        age: 18,
        region: '',
        password: '',
        checkPassword: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        checkPassword: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      },
      formLabelWidth: '60px',
      timer: null
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.timer = setTimeout(() => {
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false
              this.dialog = false
              this.$notify({
                title: '提示',
                message: '修改成功',
                type: 'success',
                duration: 2000
              })
            }, 200)
          }, 1000)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleClose(done) {
      done()
    },
    cancelForm() {
      this.loading = false
      this.dialog = false
      clearTimeout(this.timer)
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-icon{
  width: 45px;
}
.el-dropdown-menu__item{
  display: flex;
  align-items: center;
}
.dropdown-icon{
  width: 48px;
}
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container :not(last-child){
      margin-right: 5px;
    }

    .avatar-container:last-child {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 3px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 44px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 15px;
          font-size: 14px;
        }
      }
    }

  }

}
</style>
