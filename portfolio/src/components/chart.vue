<template>
  <div class="chart_container">
    <div class="chart_title">수행능력</div>
    <div class="chart">
      <Bar :data="chartData" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          "Javascript",
          "HTML5",
          "CSS",
          "VUE3",
          "Node.js",
          "Exel",
          "PPT",
          "한글",
        ],
        datasets: [
          {
            label: "수행능력",
            backgroundColor: [
              "#ffc8a2",
              "#ffc5bf",
              "#cbaacb",
              "#ffffb5",
              "#ffccb6",
              "#f3b0c3",
              "#ff968a",
              "#fee1e8",
              "#f6eac2",
            ],
            data: [70, 80, 85, 70, 80, 90, 100, 100],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "jua";
  src: url("../../public/font/BMJUA_ttf.ttf");
}

@font-face {
  font-family: "dohyeon";
  src: url("../../public/font/BMDOHYEON_ttf.ttf");
}

.chart_container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: rgba(207, 227, 223, 0.731);
}
.chart {
  width: 80%;
  height: 600px;
  display: flex;
  justify-content: center;
  margin: 5rem 0rem;
}

.chart_title {
  font-family: "dohyeon";
  font-size: 3rem;
  font-weight: 600;
  color: #e9a8ab;
  margin-top: 5rem;
}
</style>
