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
          tr
            th 1
            td
              a(href='https://en.wikipedia.org/wiki/Leicester_City_F.C.' title='Leicester City F.C.') Leicester City
              strong (C)
            td 38
            td 23
            td 12
            td 3
            td 68
            td 36
            td +32
            td 81
            td
              | Qualification for the
              a(href='https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage' title='2016–17 UEFA Champions League') Champions League group stage
          tr
            th 2
            td
              a(href='https://en.wikipedia.org/wiki/Arsenal_F.C.' title='Arsenal F.C.') Arsenal
            td 38
            td 20
            td 11
            td 7
            td 65
            td 36
            td +29
            td 71
            td
              | Qualification for the
              a(href='https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage' title='2016–17 UEFA Champions League') Champions League group stage
          tr
            th 3
            td
              a(href='https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C.' title='Tottenham Hotspur F.C.') Tottenham Hotspur
            td 38
            td 19
            td 13
            td 6
            td 69
            td 35
            td +34
            td 70
            td
              | Qualification for the
              a(href='https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage' title='2016–17 UEFA Champions League') Champions League group stage
          tr.is-selected
            th 4
            td
              a(href='https://en.wikipedia.org/wiki/Manchester_City_F.C.' title='Manchester City F.C.') Manchester City
            td 38
            td 19
            td 9
            td 10
            td 71
            td 41
            td +30
            td 66
            td
              | Qualification for the
              a(href='https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round' title='2016–17 UEFA Champions League') Champions League play-off round
          tr
            th 5
            td
              a(href='https://en.wikipedia.org/wiki/Manchester_United_F.C.' title='Manchester United F.C.') Manchester United
            td 38
            td 19
            td 9
            td 10
            td 49
            td 35
            td +14
            td 66
            td
              | Qualification for the
              a(href='https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage' title='2016–17 UEFA Europa League') Europa League group stage
          tr
            th 6
            td
              a(href='https://en.wikipedia.org/wiki/Southampton_F.C.' title='Southampton F.C.') Southampton
            td 38
            td 18
            td 9
            td 11
            td 59
            td 41
            td +18
            td 63
            td
              | Qualification for the
              a(href='https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage' title='2016–17 UEFA Europa League') Europa League group stage
          tr
            th 7
            td
              a(href='https://en.wikipedia.org/wiki/West_Ham_United_F.C.' title='West Ham United F.C.') West Ham United
            td 38
            td 16
            td 14
            td 8
            td 65
            td 51
            td +14
            td 62
            td
              | Qualification for the
              a(href='https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round' title='2016–17 UEFA Europa League') Europa League third qualifying round
          tr
            th 8
            td
              a(href='https://en.wikipedia.org/wiki/Liverpool_F.C.' title='Liverpool F.C.') Liverpool
            td 38
            td 16
            td 12
            td 10
            td 63
            td 50
            td +13
            td 60
            td
          tr
            th 9
            td
              a(href='https://en.wikipedia.org/wiki/Stoke_City_F.C.' title='Stoke City F.C.') Stoke City
            td 38
            td 14
            td 9
            td 15
            td 41
            td 55
            td &minus;14
            td 51
            td
          tr
            th 10
            td
              a(href='https://en.wikipedia.org/wiki/Chelsea_F.C.' title='Chelsea F.C.') Chelsea
            td 38
            td 12
            td 14
            td 12
            td 59
            td 53
            td +6
            td 50
            td
          tr
            th 11
            td
              a(href='https://en.wikipedia.org/wiki/Everton_F.C.' title='Everton F.C.') Everton
            td 38
            td 11
            td 14
            td 13
            td 59
            td 55
            td +4
            td 47
            td
          tr
            th 12
            td
              a(href='https://en.wikipedia.org/wiki/Swansea_City_A.F.C.' title='Swansea City A.F.C.') Swansea City
            td 38
            td 12
            td 11
            td 15
            td 42
            td 52
            td &minus;10
            td 47
            td
          tr
            th 13
            td
              a(href='https://en.wikipedia.org/wiki/Watford_F.C.' title='Watford F.C.') Watford
            td 38
            td 12
            td 9
            td 17
            td 40
            td 50
            td &minus;10
            td 45
            td
          tr
            th 14
            td
              a(href='https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C.' title='West Bromwich Albion F.C.') West Bromwich Albion
            td 38
            td 10
            td 13
            td 15
            td 34
            td 48
            td &minus;14
            td 43
            td
          tr
            th 15
            td
              a(href='https://en.wikipedia.org/wiki/Crystal_Palace_F.C.' title='Crystal Palace F.C.') Crystal Palace
            td 38
            td 11
            td 9
            td 18
            td 39
            td 51
            td &minus;12
            td 42
            td
          tr
            th 16
            td
              a(href='https://en.wikipedia.org/wiki/A.F.C._Bournemouth' title='A.F.C. Bournemouth') AFC Bournemouth
            td 38
            td 11
            td 9
            td 18
            td 45
            td 67
            td &minus;22
            td 42
            td
          tr
            th 17
            td
              a(href='https://en.wikipedia.org/wiki/Sunderland_A.F.C.' title='Sunderland A.F.C.') Sunderland
            td 38
            td 9
            td 12
            td 17
            td 48
            td 62
            td &minus;14
            td 39
            td
          tr
            th 18
            td
              a(href='https://en.wikipedia.org/wiki/Newcastle_United_F.C.' title='Newcastle United F.C.') Newcastle United
              strong (R)
            td 38
            td 9
            td 10
            td 19
            td 44
            td 65
            td &minus;21
            td 37
            td
              | Relegation to the
              a(href='https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship' title='2016–17 Football League Championship') Football League Championship
          tr
            th 19
            td
              a(href='https://en.wikipedia.org/wiki/Norwich_City_F.C.' title='Norwich City F.C.') Norwich City
              strong (R)
            td 38
            td 9
            td 7
            td 22
            td 39
            td 67
            td &minus;28
            td 34
            td
              | Relegation to the
              a(href='https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship' title='2016–17 Football League Championship') Football League Championship
          tr
            th 20
            td
              a(href='https://en.wikipedia.org/wiki/Aston_Villa_F.C.' title='Aston Villa F.C.') Aston Villa
              strong (R)
            td 38
            td 3
            td 8
            td 27
            td 27
            td 76
            td &minus;49
            td 17
            td
              | Relegation to the
              a(href='https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship' title='2016–17 Football League Championship') Football League Championship
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
export default {

}
</script>

<style lang="sass" scoped>
.page--body
  font-size: .8rem
</style>
