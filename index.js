import { fetchRenderComments } from './fetchRenderComments.js'
import { initFormListeners } from './initListeners.js'

document.addEventListener('DOMContentLoaded', () =>{
    fetchRenderComments();
    initFormListeners()
})