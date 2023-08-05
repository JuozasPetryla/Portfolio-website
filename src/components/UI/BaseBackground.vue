<template>
  <div class="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.box {
  position: absolute;
  width: 80px;
  height: 80px;
  background: #52b788;
}

.box:nth-child(1) {
  top: 10%;
  left: 30%;
  animation: animate 6.5s linear infinite;
}
.box:nth-child(2) {
  top: 15%;
  left: 42%;
  animation: animate 9.5s linear infinite;
}
.box:nth-child(3) {
  top: 70%;
  left: 30%;
  animation: animate 7.5s linear infinite;
}
.box:nth-child(4) {
  top: 17%;
  left: 4%;
  animation: animate 9s linear infinite;
}
.box:nth-child(5) {
  top: 20%;
  left: 60%;
  animation: animate 12s linear infinite;
}
.box:nth-child(6) {
  top: 67%;
  left: 10%;
  animation: animate 15s linear infinite;
}
.box:nth-child(7) {
  top: 80%;
  left: 76%;
  animation: animate 6s linear infinite;
}
.box:nth-child(8) {
  top: 60%;
  left: 80%;
  animation: animate 7s linear infinite;
}
.box:nth-child(9) {
  top: 90%;
  left: 85%;
  animation: animate 8s linear infinite;
}
.box:nth-child(10) {
  top: 10%;
  left: 95%;
  animation: animate 10s linear infinite;
}
.box:nth-child(11) {
  top: 97%;
  left: 12%;
  animation: animate 5s linear infinite;
}
.box:nth-child(16) {
  top: 95%;
  left: 7%;
  animation: animate 4s linear infinite;
}
.box:nth-child(12) {
  top: 50%;
  left: 78%;
  animation: animate 7.5s linear infinite;
}
.box:nth-child(13) {
  top: 50%;
  left: 20%;
  animation: animate 8.5s linear infinite;
}
.box:nth-child(14) {
  top: 35%;
  left: 15%;
  animation: animate 9.6s linear infinite;
}
.box:nth-child(15) {
  top: 92%;
  left: 97%;
  animation: animate 7.5s linear infinite;
}

@keyframes animate {
  0% {
    transform: scale(0) translateY(0) rotate(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.5) translateY(-180px) rotate(360deg);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .box {
    position: absolute;
    width: 70px;
    height: 70px;
    background: #52b788;
  }
}
@media (max-width: 580px) {
  .box {
    width: 55px;
    height: 55px;
  }
}
@media (max-width: 580px) {
  .box {
    width: 40px;
    height: 40px;
  }
}
</style>
