
import { fetchRenderComments } from "./fetchRenderComments.js";
import {renderComments} from "./renderComments.js";

window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000);
});

renderComments();

fetchRenderComments();

