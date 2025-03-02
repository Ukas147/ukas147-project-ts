<template>
    <div>
        <div style="display: flex; align-items: center">
            <div style="
          display: flex;
          width: 30px;
          height: 30px;
          border-radius: 5px;
          justify-content: center;
          align-items: center;
          margin: 10px 10px 10px 0;
          background-color: var(--light-pink);
        ">
                <v-icon name="fa-regular-building" width="20" height="20" />
            </div>
            <h3>Departamentos</h3>
        </div>

        <el-button type="danger" round @click="handleCreateDepartment">
            Cadastrar Departamento
        </el-button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const handleCreateDepartment = () => {
    router.push("/create-department");
};
</script>
