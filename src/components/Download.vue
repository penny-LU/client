<template>
  <v-container class="overflow-hidden pt-12"
    style="position: relative" justify='center' >
      <v-row
      justify="center">
      <v-card  flat width="60%">
        <input type="checkbox"
          :value="0"
          :false-value="0"
          :true-value="1"
          v-model="image"
          id="checkbox1"
        >
        <label for="checkbox1">Image</label>
        <v-text-field
          :disabled="!image"
          outlined
          label="image_path"
          type="text"
          v-model="image_path"
        ></v-text-field>
        <v-text-field
          :disabled="!image"
          outlined
          label="image_outputpath"
          type="text"
          v-model="image_outputpath"
        ></v-text-field>
      </v-card>
    </v-row>
    <br>
    <v-row
      justify="center">
      <v-card flat width="60%">
        <input type="checkbox"
          :value="0"
          :true-value="1"
          :false-value="0"
          v-model="video"
          id="checkbox2"
        >
        <label for="checkbox2">Video:</label>
        <br>
        <v-text-field
          :disabled="!video"
          outlined
          label="video_path"
          type="text"
          v-model="video_path"
        ></v-text-field>
        <v-text-field
          :disabled="!video"
          outlined
          label="video_outputpath"
          type="text"
          v-model="video_outputpath"
        ></v-text-field>
      </v-card>
    </v-row>
      <v-row
      justify="center"
      width="60%">
      <v-card flat width="60%">
        <input type="checkbox"
          :value="0"
          :true-value="1"
          :false-value="0"
          v-model="camera"
          id="checkbox3"
        >
        <label for="checkbox3">Realtime:</label>
        <v-text-field
          :disabled="!camera"
          outlined
          label="camera_path"
          type="text"
          v-model="camera_path"
        ></v-text-field>
      </v-card>
    </v-row>
    <!-- @input="setOptionText(optionText)" -->
    <v-row
    justify="center"
    width="60%"
    class="pt-5">
    <!-- <v-text-field
          :rules="rules"
          filled
          rounded
          dense
          label="Target Device host and port"
          type="text"
          v-model="clientaddr"
        ></v-text-field> -->
    <!--@change事件-->
    <v-select v-model="selectsok" :rules="rules">
      <option v-for="client in clients" :key="client.data" >{{client.data}}</option>
    </v-select>
    </v-row>
    <v-row
      justify="center">
      <br>
      <v-btn
            dark
            class="mt-4 mr-1 btn-pers"
            @click="send">
            <v-icon
            dark
            left
            >
              mdi-checkbox-marked-circle
            </v-icon>
            Download
      </v-btn>
    </v-row>
    </v-container>

  <!-- </v-sheet> -->
</template>

<script>
import DownloadService from '@/services/DownloadService'
export default {
  data () {
    return {
      image: false,
      video: false,
      camera: false,
      image_path: '0',
      image_outputpath: '0',
      video_path: '0',
      video_outputpath: '0',
      camera_path: '0',
      clients: null,
      selectsok: '',
      time: '',
      drawer: false,
      rules: [
        v => !!v || 'target ip is required !'
      ]
    }
  },
  async mounted () {
    await DownloadService.getclient().then((response) => {
      this.clients = response.data
    })
    console.log(this.clients)
  },
  methods: {
    async send () {
      if (this.image === false || this.image === '0') {
        this.image = '0'
      }
      if (this.video === false || this.video === '0') {
        this.video = '0'
      }
      if (this.camera === false || this.camera === '0') {
        this.camera = '0'
      }
      // console.log(this.image, ' ', this.video, ' ', this.camera)
      let str = `${this.image}\u00A0${this.video}\u00A0${this.camera}\u00A0${this.image_path}\u00A0${this.image_outputpath}\u00A0${this.video_path}\u00A0${this.video_outputpath}\u00A0${this.camera_path}`
      console.log(str)
      try {
        await DownloadService.index({
          string: str,
          client: this.selectsok
        })
      } catch (err) {
        console.log(err)
      }
    }
    // setCorrect (e) {
    //   this.$emit('set-correct',
    //   e
    //   )
    // },
    // setOptionText (text) {
    //   this.$emit('set-option-text', {
    //     optionText: text
    //   })
    // }
  }
  // components: {
  //   Menu
  // time: new Date(),
  // }
}
</script>

<style scoped>
.v-navigation-drawer--mini-variant, .v-navigation-drawer {
  overflow: visible !important
}
</style>
