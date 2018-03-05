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
        <tr>
          <th scope="row">Monday, 1st</th>
          <td><input type="text" class="form-control" id="#1" placeholder="placeholder"></td>
          <td><input type="text" class="form-control" id="#1" placeholder="placeholder"></td>
          <td><input type="text" class="form-control" id="#1" placeholder="placeholder"></td>
        </tr>
        <tr>
          <th scope="row">Tuesday, 2nd</th>
          <td><input type="text" class="form-control" id="#1" placeholder="placeholder"></td>
          <td><input type="text" class="form-control" id="#1" placeholder="placeholder"></td>
          <td><input type="text" class="form-control" id="#1" placeholder="placeholder"></td>
        </tr>
        <tr>
          <th scope="row">Wendesdey, 3rd</th>
          <td><input type="text" class="form-control" id="#1" placeholder="placeholder"></td>
          <td><input type="text" class="form-control" id="#1" placeholder="placeholder"></td>
          <td><input type="text" class="form-control" id="#1" placeholder="placeholder"></td>
        </tr>
      </tbody>
    </table>
    <button type="submit" class="btn btn-primary">Submit</button>
    <button type="submit" class="btn btn-secondary">New Entry</button>
  </div>
</template>
<script>
export default {
  name: 'details-timesheet-form'
}
</script>

