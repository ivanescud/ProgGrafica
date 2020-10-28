<template>
  <a-form :form="form">
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="email"
    >
      <a-input
        v-decorator="[
          'email',
          { rules: [{ required: true, message: 'Please input your email' }] },
        ]"
        placeholder="Please input your email"
      />
    </a-form-item>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="Password"
    >
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: checkNick, message: 'Please input your password' }] },
        ]"
        placeholder="Please input your password"
      />
    </a-form-item>
    <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
      <a-checkbox :checked="checkNick" @change="handleChange">
        Email is required
      </a-checkbox>
    </a-form-item>
    <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
     <nuxt-link to="/home"  >
      <a-button type="primary" >
        Login
      </a-button>
     </nuxt-link>
    </a-form-item>
  </a-form>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
export default {
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: 'dynamic_rule' }),
    };
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success');
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true });
      });
    },
  },
};
</script>