<template>
  <div class="card" style="width:150px">
    <div class="card-body">
      <div class="mb-3">
        <div class="chart">
          <canvas id="chart-bars"  height="100"></canvas>
        </div>
      </div>
    
      
    </div>
  </div>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "active-users-chart",
  mounted() {
    var ctx = document.getElementById("chart-bars").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        datasets: [
          {
            label: "Sales",
            tension: 0.2,
            borderWidth: 0,
            borderRadius: 0,
            borderSkipped: false,
            backgroundColor: "blue",
            data: [450, 200, 100, 220, 500, 100],
            maxBarThickness: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
               barPercentage: 0.7,
               categoryPercentage: 0.7
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 500,
              beginAtZero: true,
             
            
              color: "#fff",
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
               barPercentage: 0.8,
               categoryPercentage: 0.8
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  },
};
</script>
