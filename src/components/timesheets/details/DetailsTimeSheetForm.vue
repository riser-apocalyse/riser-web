<template>
  <div class="form-group">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Day</th>
          <th scope="col">Time Start</th>
          <th scope="col">Time End</th>
          <th scope="col">Break</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="key" v-for="day, key in working_days">
          <th scope="row">
            <div v-if="day.date === ''">
              <datepicker name="date" input-class="input" format="MMMM yyyy" v-model="day.date"></datepicker>
            </div>
            <div v-else style="white-space: nowrap; overflow: hidden; text-overflow:ellipsis">{{ day.date | moment }}</div>
          </th>
          <td><input type="text" class="form-control" id="#1" placeholder="placeholder"></td>
          <td><input type="text" class="form-control" id="#1" placeholder="placeholder"></td>
          <td><input type="text" class="form-control" id="#1" placeholder="placeholder"></td>
        </tr>
      </tbody>
    </table>
    <button type="submit" class="btn btn-primary">Submit</button>
    <button type="submit" class="btn btn-secondary" @click="addRow">New Entry</button>
  </div>
</template>
<script>

import Datepicker from "vuejs-datepicker";
import { moment } from "../../../filters";

export default {
  name: 'details-timesheet-form',
  components: {
    Datepicker
  },
  filters: {
    moment
  },
  props: [
    'working_days'
  ],
  methods: {
    addRow() {
      let workingDays = this.working_days.slice();
      workingDays.push({
        date: "",
        start: "",
        end: "",
        break: ""
      });
      this.$emit('addRow', workingDays);
    }
  }
}
</script>

