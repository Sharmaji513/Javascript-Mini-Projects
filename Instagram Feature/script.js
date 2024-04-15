document.addEventListener("DOMContentLoaded", function() {
    const followBtn = document.querySelector(".follow-btn");
    let isFollowing = false;

    followBtn.addEventListener("click", function() {
        if (isFollowing) {
            isFollowing = false;
            followBtn.textContent = "Follow";
        } else {
            isFollowing = true;
            followBtn.textContent = "Unfollow";
            
        }
    });
});
