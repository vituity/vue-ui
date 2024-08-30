<template>
  <div class="page">
    <div class="page--body">
      <div class="b-box">
        Default Style
        <table class="b-table">
          <thead>
            <tr>
              <th v-for="column in footballColumnTitles" :key="column.title">
                <abbr v-if="column.abbreviated" :title="column.ariaLabel">
                  {{ column.title }}
                </abbr>
                <span v-else>
                  {{ column.title }}
                </span>
              </th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th v-for="column in footballColumnTitles" :key="column.title">
                <abbr v-if="column.abbreviated" :title="column.ariaLabel">
                  {{ column.title }}
                </abbr>
                <span v-else>
                  {{ column.title }}
                </span>
              </th>
            </tr>
          </tfoot>
          <tbody>
            <tr v-for="row in footballTableData" :key="row.position">
              <th>{{ row.position }}</th>
              <td>
                <a :href="row.team.href">{{ row.team.title }}</a>
                <strong>(C)</strong>
              </td>
              <td>{{ row.played }}</td>
              <td>{{ row.won }}</td>
              <td>{{ row.drawn }}</td>
              <td>{{ row.lost }}</td>
              <td>{{ row.goalsFor }}</td>
              <td>{{ row.goalsAgainst }}</td>
              <td>{{ row.goalDifference }}</td>
              <td>{{ row.points }}</td>
              <td>
                {{ row.qualification.type }}
                <span v-if="row.qualification.type === 'Qualification'">for the</span>
                <span v-else-if="row.qualification.type === ''"></span>
                <span v-else>to the</span>
                <a :href="row.qualification.href" :title="row.qualification.title">
                  {{ row.qualification.text }}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="is-flex-row-wrap justify-content-space-between">
        <div class="b-box">
          <h3 class="is-bordered">.is-bordered</h3>
          <table class="b-table is-bordered">
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="b-box">
          <h3 class="is-striped">.is-striped</h3>
          <table class="b-table is-striped">
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="b-box">
          <h3 class="is-narrow">.is-compact</h3>
          <table class="b-table is-narrow is-bordered">
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>
                  <button class="b-btn is-tiny is-danger">
                    <span class="b-icon">
                      <i class="fas fa-times"></i>
                    </span>
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="b-box">
          <h3 class="is-hoverable">.is-hoverable</h3>
          <table class="b-table is-hoverable is-bordered">
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="b-box" style="width:100%">
          <h3 class="is-fullwidth">.is-fullwidth</h3>
          <table class="b-table is-hoverable is-bordered is-fullwidth">
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { footballColumnTitles, footballTableData } from './data/tablesData'

export default {
  data() {
    return {
      footballTableData,
      footballColumnTitles
    }
  }
}
</script>

<style scoped>
.page--body {
  font-size: 0.8rem;
}
</style>
