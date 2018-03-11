/**
 * Post like controller
 */

export class PostLikeController {
    constructor(selector, service) {
        this.element = document.querySelectorAll(selector);
        if (this.element != null) this.addLikeButthonsListeners();
        this.postLikeService = service;
    }

    addLikeButthonsListeners() {
        
        this.element.forEach (button => {
            // console.log(button.getAttribute('data-postId'));
            button.addEventListener('click', event => {
                event.preventDefault();
                
                
                if (button.classList.contains('btn-outline-secondary')) {
                    button.classList.remove('btn-outline-secondary');
                    button.classList.add('btn-warning');
                    button.blur();
                    let like = {
                        postId: postId,
                        like: true
                    }

                    this.postLikeService.save(like).then(createLike => {
                        console.log('** Like saves on LocalStorage **');
                    }).catch(error => {
                        console.log('** An error ocurre trying save like status on LocalStorage **', error);
                    });
                    
                } else {
                    button.classList.remove('btn-warning');
                    button.classList.add('btn-outline-secondary');
                    button.blur();
                    let like = {
                        postId: postId,
                        like: false
                    }

                    this.postLikeService.save(like).then(createLike => {
                        console.log('** Like saves on LocalStorage **');
                    }).catch(error => {
                        console.log('** An error ocurre trying save like status on LocalStorage **', error);
                    });
                } 
            })
        })
        
    }
    loadLikeStatus() {
        
    }

}