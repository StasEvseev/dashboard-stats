<template>
    <b-container class="bv-example-row bv-example-row-flex-cols panel">
        <b-row align-v="center">
            <b-col>
                <b-container>
                    <b-row>
                        <b-col>Партнеры</b-col>
                    </b-row>
                    <b-row>
                        <b-col><span v-bind:class="[
                        { below: expectedPartners > partners, above: partners > expectedPartners }
                        ]">{{partners}}</span> / {{expectedPartners}}</b-col>
                    </b-row>
                </b-container>
            </b-col>
            <b-col>
                <b-container>
                    <b-row>
                        <b-col>Пользователи</b-col>
                    </b-row>
                    <b-row>
                        <b-col><span v-bind:class="[
                        { below: expectedUsers > users, above: users > expectedUsers }
                        ]">{{users}}</span> / {{expectedUsers}} </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
        <b-row align-v="center">
            <b-col>
                <b-container>
                    <b-row>
                        <b-col>Бронирования</b-col>
                    </b-row>
                    <b-row>
                        <b-col><span v-bind:class="[
                        { below: expectedBookings > bookings, above: bookings > expectedBookings }
                        ]">{{bookings}}</span> / {{expectedBookings}}</b-col>
                    </b-row>
                </b-container>
            </b-col>
            <b-col>
                <b-container>
                    <b-row>
                        <b-col>Отзывов</b-col>
                    </b-row>
                    <b-row>
                        <b-col><span v-bind:class="[
                        { below: expectedNotes > notes, above: notes > expectedNotes }
                        ]">{{notes}}</span> / {{expectedNotes}}</b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>

        <b-row align-v="center">
            <b-col></b-col>
            <b-col>
                <b-container>
                    <b-row>
                        <b-col>На период</b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <div id="timer">
                                <span id="minutes">{{ minutes }}</span>
                                <span id="middle">:</span>
                                <span id="seconds">{{ seconds }}</span>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
            <b-col></b-col>
        </b-row>
        <b-row>
            <b-col>
                <div id="buttons">
                    <!--     Start TImer -->
                    <button
                      id="start"
                      class="button is-dark is-large"
                      v-if="!timer"
                      @click="startTimer">
                        <i class="far fa-play-circle"></i>
                    </button>
                    <!--     Pause Timer -->
                    <button
                      id="stop"
                      class="button is-dark is-large"
                      v-if="timer"
                      @click="stopTimer">
                        <i class="far fa-pause-circle"></i>
                    </button>
                    <!--     Restart Timer -->
                    <button
                      id="reset"
                      class="button is-dark is-large"
                      v-if="resetButton"
                      @click="resetTimer">
                        <i class="fas fa-undo"></i>
                    </button>
                  </div>
            </b-col>
        </b-row>
        <b-row  v-for="index in rounds">
            <b-col>
                <img class="small-icon" v-bind:class="[
                { bad: !index['success']}
                ]" src="./assets/256x256bb.jpg"><span>{{index['date'] | formatDate}}</span>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  export default {
    data() {
      return {
        timer: null,
        totalTime: (1 * 15),
        resetButton: false,
        partners: 0,
        expectedPartners: 40,
        users: 0,
        expectedUsers: 10000,
        bookings: 0,
        expectedBookings: 10000,
        notes: 0,
        expectedNotes: 10000,
        rounds: [],
      }
    },
    methods: {
      startTimer: function() {
          this.timer = setInterval(() => this.countdown(), 1000);
          this.resetButton = true;
        },
        stopTimer: function() {
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = true;
        },
        resetTimer: function() {
            this.totalTime = (1 * 15);
            this.resetStats();
        },
        resetStats: function() {
            this.partners = 0;
            this.users = 0;
            this.bookings = 0;
            this.notes = 0;
        },
        rnd: function(min,max){
            return Math.floor(Math.random()*(max-min+1)+min );
        },
        updateStats: function() {
          this.partners += this.rnd(1, 10);
          this.users += this.rnd(1, 1800);
          this.bookings += this.rnd(1, 1800);
          this.notes += this.rnd(1, 1800);
        },
        updateRound: function() {
          let success = false;
          if (this.partners >= this.expectedPartners && this.bookings >= this.expectedBookings && this.notes >= this.expectedNotes && this.users >= this.expectedUsers) {
              success = true
          }
          this.rounds.push({success: success, date: new Date()})
        },
        padTime: function(time) {
            return (time < 10 ? '0' : '') + time;
        },
        countdown: function() {
            if(this.totalTime >= 1){
                this.totalTime--;
                this.updateStats();
            } else{
                this.totalTime = 0;
                this.updateRound();
                this.resetTimer();
            }
        }
    },
    computed: {
        minutes: function() {
            const minutes = Math.floor(this.totalTime / 60);
            return this.padTime(minutes);
        },
        seconds: function() {
            const seconds = this.totalTime - (this.minutes * 60);
            return this.padTime(seconds);
        },
    }
  }
</script>

<style>

    img.small-icon {
        width: 35px;
        height: 35px;
    }

    img.small-icon.bad {
        opacity: 0.3;
    }

    .panel {
        padding-top: 50px;
        padding-bottom: 50px;
        background-color: #3E3F3A;
        color: rgba(255, 255, 255, 0.5);
    }

    span.below {
        color: red;
    }
    span.above {
        color: orange;
        font-weight: bold;
    }


    span.errorClass {
        color: blue;
    }

    #timer {
      font-size: 40px;
      line-height: 1;
      margin-bottom: 40px;
    }

</style>