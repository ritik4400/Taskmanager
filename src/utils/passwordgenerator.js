async function passwordGeneratorService(){
    try{
    const length = 8;
    const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let password =''
    for(let i =0; i < length;i++){
        const randomIndex = Math.floor(Math.random() * charset.length)
        password += charset[randomIndex]
    }
    return password
    }catch (error) {
    console.log(error)
    return { success: false, message: error }
    }
}

module.exports = {
    passwordGeneratorService
  }