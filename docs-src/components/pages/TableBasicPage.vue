<template lang="pug">
page(title='Tables')
    .page--body
      .b-box
        | Default Style
        table.b-table
          thead
            tr
              th
                abbr(title='Position') Pos
              th Team
              th
                abbr(title='Played') Pld
              th
                abbr(title='Won') W
              th
                abbr(title='Drawn') D
              th
                abbr(title='Lost') L
              th
                abbr(title='Goals for') GF
              th
                abbr(title='Goals against') GA
              th
                abbr(title='Goal difference') GD
              th
                abbr(title='Points') Pts
              th Qualification or relegation
          tfoot
            tr
              th
                abbr(title='Position') Pos
              th Team
              th
                abbr(title='Played') Pld
              th
                abbr(title='Won') W
              th
                abbr(title='Drawn') D
              th
                abbr(title='Lost') L
              th
                abbr(title='Goals for') GF
              th
                abbr(title='Goals against') GA
              th
                abbr(title='Goal difference') GD
              th
                abbr(title='Points') Pts
              th Qualification or relegation
          tbody
          <template v-for="row in footballTable">
            tr
              th {{ row.position }}
              td
                a(:href='row.team.href') {{ row.team.title }} 
                strong (C)
              td {{ row.played }}
              td {{ row.won }}
              td {{ row.drawn }}
              td {{ row.lost }}
              td {{ row.goalsFor }}
              td {{ row.goalsAgainst }}
              td {{ row.goalDifference }}
              td {{ row.points }}
              td
                | {{ row.qualification.type }} {{row.qualification.type === 'Qualification' ? 'for the' : row.qualification.type === '' ? '' : 'to the'}} 
                a(:href='row.qualification.href' :title='row.qualification.title') {{ row.qualification.text }}

          </template>
      .is-flex-row-wrap.justify-content-space-between
        .b-box
          h3 .is-bordered
          table.b-table.is-bordered
            thead
              tr
                th One
                th Two
            tbody
              tr
                td Three
                td Four
              tr
                td Five
                td Six
              tr
                td Seven
                td Eight
              tr
                td Nine
                td Ten
              tr
                td Eleven
                td Twelve
        .b-box
          h3 .is-striped
          table.b-table.is-striped
            thead
              tr
                th One
                th Two
            tbody
              tr
                td Three
                td Four
              tr
                td Five
                td Six
              tr
                td Seven
                td Eight
              tr
                td Nine
                td Ten
              tr
                td Eleven
                td Twelve
        .b-box
          h3 .is-narrow
          table.b-table.is-narrow.is-bordered
            thead
              tr
                th One
                th Two
            tbody
              tr
                td Three
                td Four
              tr
                td Five
                td
                  .b-btn.is-tiny.is-danger
                    .b-icon
                      i.fas.fa-times
                    span Delete
              tr
                td Seven
                td Eight
              tr
                td Nine
                td Ten
              tr
                td Eleven
                td Twelve
        .b-box
          h3 .is-compact
          table.b-table.is-compact.is-bordered
            thead
              tr
                th One
                th Two
            tbody
              tr
                td Three
                td Four
              tr
                td Five
                td
                  .b-btn.is-tiny.is-danger
                    .b-icon
                      i.fas.fa-times
                    span Delete
              tr
                td Seven
                td Eight
              tr
                td Nine
                td Ten
              tr
                td Eleven
                td Twelve
        .b-box
          h3 .is-hoverable
          table.b-table.is-hoverable.is-bordered
            thead
              tr
                th One
                th Two
            tbody
              tr
                td Three
                td Four
              tr
                td Five
                td Six
              tr
                td Seven
                td Eight
              tr
                td Nine
                td Ten
              tr
                td Eleven
                td Twelve
        .b-box(style="width:100%")
          h3 .is-fullwidth
          table.b-table.is-hoverable.is-bordered.is-fullwidth
            thead
              tr
                th One
                th Two
            tbody
              tr
                td Three
                td Four
              tr
                td Five
                td Six
              tr
                td Seven
                td Eight
              tr
                td Nine
                td Ten
              tr
                td Eleven
                td Twelve
</template>
  
  <script>
  import { footballTable } from './data/tablesData';
  export default {
  data() {
    return {
      footballTable,
    }
  }
  }
  </script>
  
  <style lang="sass" scoped>
  .page--body
    font-size: .8rem
  </style>
  