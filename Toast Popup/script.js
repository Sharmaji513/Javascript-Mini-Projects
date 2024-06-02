const showToastBtn = document.querySelector('.show-toast')
const horizontalPosition = document.querySelector('#horizontal-position')
const verticalPosition = document.querySelector('#vertical-position')
const toastsContainer = document.querySelector('.toasts-conatiner')
const toastType = document.querySelector('#toast-type')
const toastMessage = document.querySelector('#toast-message')
const durationInput = document.querySelector('#duration')




showToastBtn.addEventListener('click', () => {

    if (horizontalPosition.value === 'right') {
      toastsContainer.classList.add('right')
    } else {
      toastsContainer.classList.remove('right')
    }
    if (verticalPosition.value === 'bottom') {
      toastsContainer.classList.add('bottom')
    } else {
      toastsContainer.classList.remove('bottom')
    }
  


   const newToast = document.createElement('div')
   newToast.classList.add('toast')
   newToast.classList.add(toastType.value)
   newToast.innerText = ` ${toastMessage.value}`

   toastsContainer.append(newToast)


   const closeIcon = document.createElement('span')
   closeIcon.innerText = ' ✕'
   newToast.append(closeIcon)


   function removeToast(){
    if (toastsContainer.classList.contains('right')) {
      newToast.classList.add('go-right')
    } else {
      newToast.classList.add('go-left')
    }
    
    setTimeout(()=>{
      newToast.remove()
    } , 100)
   }


   setTimeout(() => {
    // console.log(`after ${durationInput.value} ms`)
    removeToast()
  }, parseInt( durationInput.value * 1000))


   closeIcon.addEventListener('click', () => {
    removeToast()
   })

  })