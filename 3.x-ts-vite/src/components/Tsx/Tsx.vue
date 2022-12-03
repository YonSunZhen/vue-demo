<!--
 * @Author: yongzhen.sun
 * @Date: 2022-09-22 08:47:05
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-12-03 23:34:59
 * @Description: file content
-->
<template>
<!-- <Input1></Input1> -->
<Input v-bind="inputProps"></Input>
</template>

<script lang="jsx" setup name="Jsx">
import { Input } from './tsx.tsx'

const inputProps = {
  type: 'password'
}

const Input1 = Input(inputProps)


</script>

<style scoped>
</style>
      