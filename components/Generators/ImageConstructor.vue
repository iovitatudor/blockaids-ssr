<template>
  <v-row class="image-constructor">
    <v-col>
      <h3>Support people living with HIV, add our distinctive sign to Your avatar</h3>
      <div class="step-item">
        <span class="step-item-1">1</span
        <div class="upload-btn-wrapper">
          <button class="btn">Upload a file</button>
          <input type="file" name="myFile" @change="uploadImage"/>
        </div>
      </div>
      <div class="step-item">
        <span class="step-item-2">2</span>
        Place our distinctive sign on it
      </div>
      <div class="step-item">
        <span class="step-item-3">3</span>
        Download avatar
        <v-btn v-if="readyToDownload" @click="download">Download</v-btn>
      </div>
    </v-col>
    <v-col class="text-center">
      <canvas id="canvas"
              @mousedown="mousedown"
              @mousemove="mousemove"
              @mouseup="mouseup"
              @mouseout="mouseout"
      ></canvas>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ImageConstructor",
  data() {
    return {
      canvas: null,
      context: null,
      // mainImage: new Image(),
      // star_img: new Image(),
      mainImage: null,
      star_img: null,
      isDraggable: false,
      currentX: 0,
      currentY: 0,
      currentA: 0,
      currentB: 0,
      previewImage: null,
      readyToDownload: false,
    };
  },
  methods: {
    download() {
      const dataURL = this.canvas.toDataURL("image/jpeg", 1.0);
      this.downloadImage(dataURL, 'my-canvas.jpeg');
    },
    downloadImage(data, filename = 'untitled.jpeg') {
      const a = document.createElement('a');
      a.href = data;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
    },
    init() {
      this.canvas = document.getElementById("canvas");
      this.context = this.canvas.getContext("2d");

      this.mainImage = new Image();
      this.star_img = new Image();

      this.currentX = this.canvas.width / 2;
      this.currentY = this.canvas.height / 2;

      this.mainImage.onload = () => {
        this.go();
      };

      // star_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADFdJREFUeNrs3c1xG9kVhuGmSnvDEQjacScqAoEZaDIgI5C4mqWGS66oiUBwBGYGgiMYejc7wRGYjmDcl7wcwxDFPzTQ99z7vFUoaKZY+Dl98PZ30QfdXQcAAAAAAAAAAAAAAAAAAAAAAFA1Z/vnR+mmEhial0qALfAp38+VAkPyQgkwdLrq76bpJmWBsBAlXa3/GyAsFJmubpGyQFgIka6kLBAWwqQrKQuEhVDpSsoCYSFMupKyQFgIla6kLBAWwqQrKQuEhVDpSsoCYSFMupKyQFgIla6kLBAWwqQrKQuEhVDpSsoCYWHn6er9M9PVasp6r5IgLOyCD4U8BggLuDddzfq72QAPNcuPBRAWtsanQh8LhAVsJV1JWSAshEpXUhYIC2HSlZQFwkKodCVlgbAQJl1JWSAshExAUhYIC8WnKykLhIWQyUfKAmGh+HQlZYGwEDLxSFkgLBSfrqQsEBZCJh0pC4SF4tOVlAXCQsiEI2WBsFB8upKyQFh4NB+8FpTKnhJgJV1N+7tvhb2s1z//frK0dSBhYZ1PXhMkLEhXUhYkLDSSZKQsSFgIka6kLEhYCJdgpCxIWNJViHQlZUHCQrjkImVJWJCuQiFlSViQrrxmSFiQrqQsSFhoOqlIWRIWpCspCxIWJBTvARIWmk1XUpaEBenKe4GEBelKyoKEBYlEypKwIF1JWZCwMCpH3hskLERIV5OcriaVvsWrnLKubG0JC/H5WLGsuvzePtrMEhakKykLEhakKykLEhZaTFdSloQF6UrKgoQF6UrKgoSFptOVlCVhQbqSsiBhQbqSsiBhSVfNpyspS8KCdCVlQcKCdCVlQcKSriBlSViQrqQsSFiQrqQsSFjSFaQsCQvSlZQFwsJz+KAEakRYiLAcPJKuHpeycq1AWBgRl7lSK8JCmHQ1VYlHM5WyCAsSg5qBsCBdSVkgLElB7UBYkK6kLBAWJAQ1BGFJV1IWCAuSgVqCsKQr6UrKIixIBGoKwoJ0JWWBsCQBqC1hQbqSskBYkADUGIQlXUHKagfndC9HTOkkfAdZTun2prs5Md9MdXbKors5B/w/+9sy3y6dD56wWhXTjJTqkVkvsoWyEFYNUrpNTK+ynA46pzKulSSxyyyxf+V/X5EZYZUkpYMVEZESniKzlMwulYawtiGl2yXbX7r//44J2JRlviV5/ed2yUlmhEVKIDPCCiOl6dqS7V33v++YgGhc5qXmP1aXnL3MloRFSgCZEdazpGRWCXg+iy74jFlxwiIlgMyKE9YPZpVICShTZklgo8+YbVVYBiiBqtn5wOzGwvrBWAApAWR22Q08lvEoYZlVAjAgy+6ZM2Z7K1KarKSjV6QEYGSZ3S4z//zy/+XaH5935pYAjMdtSJrl/07COrxzSZhT1lfSAlAA17JaHa347jss0gJQoqzuFBZpAShRVj8UFmkBKE1W9wprRVxf+rsjdQSwZea9qI7v+4PHzmGRFoBRZfVoYZEWgLFl9SRhkRaAMWX1ZGGRFoCxZPUsYZEWgDFk9WxhkRaAXctqI2GRFoBdympjYZEWgF3JKvFi01eQX8CpbQHgHk43ldUgCWslaaWU9cV2AbDGcS+r+RAPNOg53UkLwLZkNbiwSAvAtmS1FWGRFoBtyGprwiItgKy28cDbvi4haQFkFUNYpAWQVShhkRZAVqGERVoAWYUSVpbWrL/7e+cy9kANpPOu/9TLarGrJ9zb9TvMl73/SlpAeFkdPuby8qGFRVoAWYUSFmkBZBVKWKQFkFUoYZEWQFahhEVaAFmFEhZpAWQVSlikBZBVKGGRFkBWoYSVpTXJ0jrQN8DOucyyuirthe2VWjHSAsgqjLBICyCrUMIiLYCsQgmLtACyCiUs0gLIKpSwSAtoW1bhhEVaQLuyCiks0gLalFXiRcRq50If9rcLvQc8iYuosgqbsNbSVrqwxZE+BB5k3ovqOPIb2KthK5AWUL+sqhEWaQH1y6oqYZEWULesqhMWaQH1yqpKYZEWUKesqhUWaYGs6pNV1cIiLZAVYZEWQFaj8aL2LZg34IleRuWc1C6rJhLWStJKKeuLvkaFHPeymrfwRvda2qqkBbIiLNICyIqwSAsgq+aFRVogK8IiLYCsCIu0ALIiLNICWYXihT64Hi5NjZCG7q5UA2QlYUVJWumiFuniFhPVQAFcX7ugl9WlUhAWaYGsCIu0ALIiLNICWREWSAtkRVikBZAVYZEWyIqwQFogK8IiLYCshsCk+xPIjWUaHoMJi6wIa9tMlQB6ibAiLAlnqgA9RVj2iNBTICzNBT1FWK3yTgmgpwgrCgdKAD1FWMVztn+eZq/MX2FoJrm3QFj2hNBbhKWpAL1FWEXzSgmgtwjLXhB6C4SlqaC3CKs5HCHElnGkkLDsAaHHCKtNZkoAPUZYUXAUB3qMsMIwVQLoMcIS1wE9RlhDcbZ/bs8HvUZYojqg1whLVIdeI6xmcfQGeo2wwmCgD3qNsDQRoNcIazDylZ4BPUdYIZgqAfQcYYnogJ4jrIF5owTQc4QlngN6jrDEc+g5wmoOR2ug9wjLng7Qe4S1BaZKAL1HWFF4pwTQe4RlLwfoPcLSNNB7hNUcZ/vnM1WAHiQsezhADxKWZoEeJKxWcZQGepCwwmBwD3qQsMrnbP980t9NVAIjM8m9CMKyZ4NeJCxNAuhFwtopLrUEvUhY9mqAXiQsTQK9SFjt4QghCsORQsKyR4OeJKw6mCkB9CRhRcFRGehJwgrDVAmgJwlL/G6Leb5BTxLWNjjbP7cnG0ZUr3/+/eQ43dK/iUtvDslLJRC9B2DR35Kklqv/M//3cf+BO+3vv0gLG/XmUhkIS/TeXFSnvZgW9/1RFtdhPu3vJ7V+Vm8ulIGwVnE0ZmBR3SGu9PcL4tKbhLU5BvQeZplFNd/kQVbEdZTFZTmuNx/FnhLc0H94/lCF7YrqntoT18OS91klrD8/MGkP9ptKfMdVFtXnHW2Hj1lcfj/3PW/77XDZehGMNdxgz36HqLqbEYXPu3rS/Fyv83Nf2Qx6dB3fYfmOYF1Uv/a3z708RhFGft5f+rSV5JUS1weJ688evSAsJN4owfWA5+n6LNVYrIhrnpeJR3oUhCVuFyWqO8SVXtft8GnL4rIk7Hzpfk2jRwgX3R3T6QG2VfrgNjk170ghYXV5iPFrY6J68tBnodutteHTw+jbzZJQ1G5KVCtpI72P1qbmm18WElb9TZCWfCf9B7zKI0wr4nrf359Xvj0Ji6+6dxWLamvT6QWKKwn5ovKp+Xetf1gJq77GvsqJat7ixszve57FlRLXRK/Wg0n3eppgdTp93vpGzTWobWq+eWE1fZSwkiOEo0+nB9jOKWXVMjXf9JHC1peE0fdY87z8I6r709bqz33SMvFIzxJWRKL+3CGJ6jTa0Gch4oo+Nd/0T3RaF1a0Hz1f5ERFVJuJa7kirpS43utZwrLxh2PRVTT0WZi4fgo2fNq0sJr90j1/EftvosJKT0QR119b/d6y5YRV8p7qeslCVDtPXKnetz/3ST+wnhbcu032BmGVJ6pTc1RFiOt1wVPzhNUgJV06iajKFFfaHvMCxdXsZb9annQvIWHdTqe/JavixfW2K2dqvtkv3i0JxxOV6fRY0irpXPPNCqvJo4T5rJXfRnr6z3n5R1Sxe2iSl4kfR3oJr1ucx2s1YU1HeM55Zzq9tsR10ovr126cqfnUw831UqvfYc12LKq0NzwmqyrFtUzbtrs5M8S80h6WsEZmF0dZFp2hz6bE1d383Odv3W6GT5s8UmhJSFQYVlxpu+/iXPPTFuvbqrC20UTXe1iiwh3i2sbUfJNLwuaOEm7hCOGyM/SJh/vuqBt++LS5I4UtJqyhGoao8JTElfpk6Kn5adfYkcIWhbVplL4e+uwb8BcfQ2wgrtQ/mw6fpl5etFS/FscannvGxtWLPJAVNhVX6qFNL5LR3NlHLQkfR2oqP6PB0NJa/7nPpx30cmha/NL9jyf8eYrvptOxq96cdk+cmu97s6nP8F5jDZF+NPobUaEicaUzfVxaEra5HFx0Nxd5uPSxwYhLxbSjPM6/U0wXyZg90NOEVSkH94jKdDpKE1cS0eEDU/Oppy8Iq07Wj6pc5kRFVChZXKk/b6fmz9d2vE0dKWx1SbjsDH0iprjerg2fTlWmUvoN/S1vbKCGfj5KPa0SAAAAAAAAAAAAAAAAAAAAAACMxX8FGABTLRUFSFar0wAAAABJRU5ErkJggg==";
      this.star_img.crossOrigin = "anonymous"
      this.mainImage.crossOrigin = "anonymous"
      this.star_img.src = 'data:image/png;base64,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';
      // this.mainImage.src = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=';
      // this.mainImage.src = 'http://localhost:5001/img/a1.617f6789.jpg';
      this.mainImage.src = this.previewImage;
      // this.go();
      console.log(this.previewImage.width, this.previewImage.height);
    },
    uploadImage(e) {
      const image = e.target.files[0];
      if (image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
          this.previewImage = e.target.result;
          this.init();
          // console.log(this.previewImage);
        };
        this.readyToDownload = true;
      }
    },
    go() {
      // this.mouseEvents();
      setInterval(() => {
        this.resetCanvas();
        this.drawImage();
      }, 1000 / 30);
    },
    resetCanvas() {
      this.context.fillStyle = '#fff';
      // this.context.fillStyle = "url('https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=')";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    mousedown(e) {
      let mouseX = e.pageX - e.offsetLeft;
      let mouseY = e.pageY - e.offsetTop;

      if (mouseX >= (this.currentX - this.star_img.width / 2) &&
        mouseX <= (this.currentX + this.star_img.width / 2) &&
        mouseY >= (this.currentY - this.star_img.height / 2) &&
        mouseY <= (this.currentY + this.star_img.height / 2)) {
        this.isDraggable = true;
      }
      this.isDraggable = true;

    },
    mousemove(e) {
      if (this.isDraggable) {
        this.currentX = e.offsetX;
        this.currentY = e.offsetY;
      }
    },
    mouseup() {
      this.isDraggable = false;
    },
    mouseout() {
      this.isDraggable = false;
    },
    drawImage() {
      this.canvas.width = this.mainImage.width;
      this.canvas.height = this.mainImage.height;
      this.context.drawImage(this.mainImage, 0, 0, this.mainImage.width, this.mainImage.height);

      this.context.drawImage(this.star_img,
        this.currentX - (this.star_img.width / 2),
        this.currentY - (this.star_img.height / 2));
      // this.context.drawImage(this.star_img, this.mainImage.width - 100, this.mainImage.height - 100);
    }
  }
}
</script>

<style lang="scss" scoped>
.image-constructor {
  display: flex;
  justify-content: center;
  align-items: center;

  #canvas {
    background-position: center;
    background-size: cover;
    background-color: #FFF;
    border: 2px dashed #0d2b47;
  }

  img {
    width: 80%;
  }

  h3 {
    font-size: 2.5em;
  }

  .step-item {
    background: #FFFFFF;
    box-shadow: 0px 7px 22px rgba(143, 134, 196, 0.07);
    border-radius: 20px;
    padding: 30px 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    span {
      padding: 20px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 20px;
      margin-right: 20px;
    }

    .step-item-1 {
      color: #8E22E2;
      background-color: #F6EBFF;
    }

    .step-item-2 {
      color: #2B3DC7;
      background-color: #E7E9FF;
    }

    .step-item-3 {
      color: #3DCD65;
      background-color: #E9FFEF;
    }
  }
}

//.upload-btn-wrapper {
//  position: relative;
//  /*   overflow: hidden; */
//  display: inline-block;
//}
//
//.btn {
//  border: 2px solid gray;
//  color: gray;
//  background-color: white;
//  padding: 8px 20px;
//  border-radius: 8px;
//  font-size: 20px;
//  font-weight: bold;
//}
//
//.upload-btn-wrapper input[type=file] {
//  font-size: 100px;
//  position: absolute;
//  left: 0;
//  top: 0;
//  opacity: 0;
//}
</style>
