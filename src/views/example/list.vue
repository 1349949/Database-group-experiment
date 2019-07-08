<template>
  <div class="app-container">
    <el-table v-loading="listLoading"
              :data="list"
              border
              fit
              highlight-current-row
              style="width: 100%">
      <el-table-column align="center"
                       label="ID"
                       width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px"
                       align="center"
                       label="Date">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300px"
                       label="Title">
        <template slot-scope="{row}">
          <el-collapse>
            <el-collapse-item :title="row.title">
              <mavon-editor v-html="row.content"
                            :subfield="false"
                            defaultOpen="preview"
                            :toolbarsFlag="false"
                            :boxShadow="false" />
            </el-collapse-item>
          </el-collapse>
          <!--router-link :to="'/example/edit/'+row.id"
                       class="link-type">
            <span>{{ row.title }}</span>
          </router-link-->
        </template>
      </el-table-column>

      <el-table-column width="200px"
                       align="center"
                       label="Label">
        <template slot-scope="scope">
          <span>{{ scope.row.label }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px"
                       align="center"
                       label="Author">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px"
                       label="Importance">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance"
                    :key="n"
                    icon-class="star"
                    class="meta-item__icon" />
        </template>
      </el-table-column>

      <el-table-column class-name="status-col"
                       label="Status"
                       width="110">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">{{ row.status }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column v-if="checkPermission(['admin'])"
                       class-name="status-col"
                       label="Edit"
                       width="110">
        <template slot-scope="scope">
          <router-link :to="'/example/edit/'+scope.row.id">
            <el-button type="primary"
                       size="small"
                       icon="el-icon-edit">
              Edit
            </el-button>
          </router-link>
        </template>
      </el-table-column>

      <el-table-column align="center"
                       label="Add"
                       width="60">
        <template slot-scope="scope">
          <el-button :type="scope.row.button.type"
                     :icon="scope.row.button.icon"
                     @click="addToWorkbook(scope.row.id)"
                     circle></el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0"
                :total="total"
                :page.sync="listQuery.page"
                :limit.sync="listQuery.limit"
                @pagination="getList" />
    <div id="cart"
         v-if="workbookList.length !== 0"
         @click="createWorkbook">
      <i class="el-icon-goods"></i>
    </div>
  </div>
</template>

<script>
import { fetchList } from "@/api/article";
import Pagination from "@/components/Pagination"; // Secondary package based on el-pagination
import checkPermission from '@/utils/permission' // 权限判断函数
import { mapState } from 'vuex'

export default {
  name: "ArticleList",
  components: { Pagination },
  filters: {
    statusFilter (status) {
      const statusMap = {
        published: "success",
        draft: "info",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data () {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      workbookList: []
    };
  },
  computed: {
    ...mapState({
      problem: state => state.problem.problem,
      workbooks: state => state.problem.workbooks
    }),
  },
  created () {
    const front =
      `# SQL练习

## 相关数据

### 学生表 Student

| SId | Sname | Sage       | Ssex |
|:—:|:——:|:—————:|:——:|
| 01  | 赵雷    | 1990-01-01 | 男    |
| … | …   | …        | …  |

### 科目表 Course

| CId | Cname | TId |
|:—:|:——:|:—:|
| 01  | 语文    | 02  |
| … | …   | … |

### 成绩表 SC

| SId | CId | score |
|:—:|:—:|:——:|
| 01  | 01  | 80    |
| … | … | …   |

### 教师表 Teacher

| TId | Tname |
|:—:|:——:|
| 01  | 张三    |
| … | …   |

## 1. 简单查询
### 题目描述
`;
    const back = `
### 代码
\`\`\`sql
\`\`\`
### 解题思路
> 请写下解题思路`

    for (let i in this.problem) {
      this.problem[i].content = front + this.problem[i].content + back;
    }
    this.getList();
  },
  methods: {
    checkPermission,
    getList () {
      this.listLoading = true;
      this.total = this.problem.length;

      if (this.listQuery.page * this.listQuery.limit <= this.problem.length) {
        this.list = this.problem.slice((this.listQuery.page - 1) * this.listQuery.limit, this.listQuery.page * this.listQuery.limit)
      } else {
        this.list = this.problem.slice((this.listQuery.page - 1) * this.listQuery.limit)
      }
      this.listLoading = false;
      for (let i in this.list) {
        this.list[i].button = {};
        if (this.workbookList.indexOf(this.list[i].id) > -1) {
          this.list[i].button.icon = "el-icon-minus";
          this.list[i].button.type = "danger";
        } else {
          this.list[i].button.icon = "el-icon-plus";
          this.list[i].button.type = "success";
        }
      }/*
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.total = response.data.total;
        this.listLoading = false;
        console.log(this.list);
        for (let i in this.list) {
          this.list[i].button = {};
          if (this.workbookList.indexOf(this.list[i].id) > -1) {
            this.list[i].button.icon = "el-icon-minus";
            this.list[i].button.type = "danger";
          } else {
            this.list[i].button.icon = "el-icon-plus";
            this.list[i].button.type = "success";
          }
        }
      });
      */
    },
    addToWorkbook (id) {
      for (let i in this.list) {
        if (this.list[i].id === id) {
          if (this.list[i].button.icon === "el-icon-plus") {
            this.workbookList.push(id);
            this.list[i].button.icon = "el-icon-minus";
            this.list[i].button.type = "danger";
          } else {
            this.workbookList.splice(a => {
              let i = a.length;
              while (i--) {
                if (a[i] === id) {
                  return i;
                }
              }
              return false;
            }, 1);
            this.list[i].button.icon = "el-icon-plus";
            this.list[i].button.type = "success";
          }
        }
      }
    },
    createWorkbook () {
      this.$prompt('Please input the name of the workbook', 'Notice', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then(({ value }) => {
        this.workbooks.push({ name: value, list: this.workbookList });
        for (let i in this.list) {
          if (this.workbookList.indexOf(this.list[i].id) > -1) {
            this.list[i].button.icon = "el-icon-plus";
            this.list[i].button.type = "success";
          }
        }
        console.log(this.workbooks);
        this.$message({
          type: 'success',
          message: 'The name of the workbook is: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Canceled'
        });
      });
    }
  }
};
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
#cart {
  width: 48px;
  height: 48px;
  position: fixed;
  right: 0px;
  bottom: 100px;
  text-align: center;
  font-size: 24px;
  border-radius: 6px 0 0 6px !important;
  pointer-events: auto;
  cursor: pointer;
  background-color: rgb(24, 144, 255);
  color: #fff;
  z-index: 1;
  line-height: 48px;
}
</style>
