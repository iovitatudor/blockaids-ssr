<template>
  <div fluid class="footer-area">
    <v-container>
      <v-row class="footer-area-inside">
        <v-col md="3" class="footer-logo">
          <nuxt-link to="/">
            <img src="/images/logo.png" width="200px">
          </nuxt-link>
          <p>A decentralized electronic ecosystem on the blockchain</p>
        </v-col>
        <v-col md="3" class="footer-menu">
          <ul>
            <li>
              <nuxt-link to="/collections">NFT Collection</nuxt-link>
            </li>
            <li>
              <a href="https://avatar.blockaids.online">Avatar Generator</a>
            </li>
          </ul>
        </v-col>
        <v-col md="3" class="footer-menu">
          <ul>
            <li>
              <a href="https://blockaids.world/" target="_blank">About BlockAIDS</a>
            </li>
            <li>
              <a href="https://blockaids.gitbook.io/blockaids-docs/" target="_blank">Docs</a>
            </li>
          </ul>
        </v-col>
        <v-col md="3" class="social-links">
          <p>
            <a href="mailto:info@blockaids.online">info@blockaids.online</a>
          </p>
          <a href="https://www.facebook.com/BLockAIDS" target="_blank" class="social-link">
            <img src="/images/Group 225.png" alt="">
          </a>
          <a href="https://www.instagram.com/block.aids/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank"
             class="social-link">
            <img src="/images/Group 226.png" alt="">
          </a>
          <a href="https://twitter.com/block_aids" target="_blank" class="social-link">
            <img src="/images/Group 297.png" alt="">
          </a>
          <a href="https://discord.com/" target="_blank" class="social-link">
            <img src="/images/Group 300.png" alt="">
          </a>
        </v-col>
      </v-row>
      <v-row class="copyright text-center">
        <v-col>
          © 2023 blockaids. All rights reserved
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer-area {
  background-color: #f3fbfb;
  padding-top: 104px;

  .footer-area-inside {
    padding-top: 2em;
  }

  .footer-logo {
    a {
      display: block;
    }

    img {
      width: 80%;
      height: auto;
    }

    p {
      font-size: 14px;
      line-height: 1.3;
      margin-top: 25px;
      max-width: 80%;
    }
  }

  .footer-menu {
    ul {
      list-style: none;

      li {
        margin-bottom: 20px;

        a {
          font-size: 18px;
          color: #000;
          text-decoration: none;
        }
      }
    }
  }

  .social-links {
    a {
      font-size: 18px;
      color: #000;
      text-decoration: none;
    }

    .social-link {
      margin-right: 18px;
    }
  }

  .copyright {
    margin-top: 100px;
    padding: 18px;
    border-top: 1px solid #E8F8F6;
  }
}

@media only screen and (max-width: 600px) {
  .footer-area {
    background-color: #f3fbfb;
    padding: 20px 10px;

    .footer-area-inside {
      padding-top: 1em;
      display: block;
    }

    .footer-logo {
      a {
        display: block;
      }

      img {
        width: 60%;
        height: auto;
      }

      p {
        font-size: 14px;
        line-height: 1.3;
        margin-top: 25px;
        max-width: 80%;
      }
    }

    .footer-menu {
      padding-bottom: 0;
      margin-bottom: 0;
      padding-top: 0;
      margin-top: 0;

      ul {
        list-style: none;

        li {
          margin-bottom: 20px;

          a {
            font-size: 16px;
            color: #000;
            text-decoration: none;
          }
        }
      }
    }

    .social-links {
      a {
        font-size: 18px;
        color: #000;
        text-decoration: none;
      }

      .social-link {
        margin-right: 24px;
      }
    }

    .copyright {
      margin-top: 20px;
      padding: 18px;
      border-top: 1px solid #E8F8F6;
    }

    ul {
      padding: 0;
    }
  }
}
</style>
