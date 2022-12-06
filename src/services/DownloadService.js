import APi from '@/services/APi'

export default {
  index (credentials) {
    return APi().post('/download', credentials)
  },
  customD (credentials) {
    return APi().post('/custom', credentials)
  },
  getclient () {
    return APi().get('/download')
  }
}

// export an object has register method
// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })
