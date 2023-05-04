<template>
  <div>
    <v-row>
      <v-col md="3">
        <h4>Mint NFT:</h4>
        <v-text-field type="text" v-model="name" placeholder="NFT Name"></v-text-field>
        <v-text-field type="text" v-model="image" placeholder="NFT Image URL"></v-text-field>
        <v-text-field type="text" v-model="description" placeholder="NFT Description"></v-text-field>
        <v-btn @click="mintNFT">Mint</v-btn>
        <hr>
        <pre><b>RESPONSE:</b>{{ mintResponse }}</pre>
      </v-col>
      <v-col md="3">
        <h4>Mint Status:</h4>
        <hr>
        <v-btn @click="checkMintStatus" v-if="mintResponse">Check Minted NFT</v-btn>
        <hr>
        <pre><b>RESPONSE:</b>{{ checkMintResponse }}</pre>
      </v-col>
      <v-col md="3">
        <h4>Create a Collection:</h4>
        <v-text-field type="text" v-model="collection.name" placeholder="Collection Name"></v-text-field>
        <v-text-field type="text" v-model="collection.image" placeholder="Collection Image URL"></v-text-field>
        <v-text-field type="text" v-model="collection.description" placeholder="Collection Description"></v-text-field>
        <v-btn @click="createCollection">Create Collection</v-btn>
        <hr>
        <pre><b>RESPONSE:</b>{{ collection.response }}</pre>
      </v-col>
      <v-col md="3">
        <h4>Collections:</h4>
        <hr>
        <v-btn @click="getAllCollections" v-if="mintResponse">Get All Collections</v-btn>
        <hr>
        <pre><b>RESPONSE:</b>{{ collectionList }}</pre>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "test",
  data() {
    return {
      name: '',
      image: null,
      description: '',
      mintResponse: {},
      checkMintResponse: {},
      collectionList: {},
      collection: {
        name: '',
        image: null,
        description: '',
        response: {},
      },
    };
  },
  methods: {
    async mintNFT() {
      // const collectionId = 'default-solana';
      const collectionId = 'ac541b46-b715-4b2c-9cff-30ff824591d4';

      const recipient = 'polygon:0xD1414DF3CB293AAe9a12A9e20FAA6a5fE67448C4';

      const response = await axios.post(
        `https://staging.crossmint.com/api/2022-06-09/collections/${collectionId}/nfts`,
        {
          'recipient': 'polygon:0xD1414DF3CB293AAe9a12A9e20FAA6a5fE67448C4',
          'metadata': {
            'name': this.name,
            'image': this.image,
            'description': this.description,
          }
        },
        {
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'x-client-secret': 'sk_test.0191af3f.453f08fda3444cf03b7092cd98f2f92e',
            'x-project-id': '5db583f6-b4bf-485b-b5ae-2143e5f8565b'
          }
        }
      );
      this.mintResponse = response.data;
    },
    async checkMintStatus() {
      const response = await axios.get(
        `https://staging.crossmint.com/api/2022-06-09/collections/default-solana/nfts/${this.mintResponse.id}`, {
          headers: {
            'x-client-secret': 'sk_test.0191af3f.453f08fda3444cf03b7092cd98f2f92e',
            'x-project-id': '5db583f6-b4bf-485b-b5ae-2143e5f8565b'
          }
        });
      this.checkMintResponse = response.data;
    },
    async getAllCollections() {
      const response = await axios.get('https://staging.crossmint.com/api/2022-06-09/collections/', {
        headers: {
          'x-client-secret': 'sk_test.0191af3f.453f08fda3444cf03b7092cd98f2f92e',
          'x-project-id': '5db583f6-b4bf-485b-b5ae-2143e5f8565b'
        }
      });

      this.collectionList = response.data;
    },
    async createCollection() {
      const response = await axios.post(
        'https://staging.crossmint.com/api/2022-06-09/collections/',
        {
          'chain': 'solana',
          'metadata': {
            'name': this.collection.name,
            'imageUrl': this.collection.image,
            'description': this.collection.description
          }
        },
        {
          headers: {
            'content-type': 'application/json',
            'x-client-secret': 'sk_test.0191af3f.453f08fda3444cf03b7092cd98f2f92e',
            'x-project-id': '5db583f6-b4bf-485b-b5ae-2143e5f8565b'
          }
        }
      );
    }
  }
}
</script>

<style scoped>

</style>
