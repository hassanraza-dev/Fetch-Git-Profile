

function get_github_data() {
    var input_username = document.getElementById('user_name').value;
    var card_div = document.getElementById('avatar-card');
    var get_profile_pic = document.getElementById('profile_pic');
    var get_git_user = document.getElementById('git_user');
    var get_git_user_location = document.getElementById('git_user_location');
    var get_git_user_id = document.getElementById('git_user_id');
    var get_git_repo = document.getElementById('git_repo');
    var get_git_following = document.getElementById('git_following');
    var get_git_followers = document.getElementById('git_followers');


    if(input_username != '')
    {
        fetch('https://api.github.com/users/' + input_username)
        .then(response => response.json())
        .then(data => {
            card_div.style = 'display:block';
            document.getElementById('error_div').style = 'display:none';
            console.log(data)
            
            get_profile_pic.style.backgroundImage = 'url('+data.avatar_url+')';
            get_git_user.innerHTML = data.login;
            get_git_user_location .innerHTML= 'Location: ' + data.location;
            get_git_user_id.innerHTML = 'User Id: ' + data.id;
            get_git_repo.innerHTML = data.public_repos;
            get_git_following.innerHTML = data.following;
            get_git_followers.innerHTML = data.followers; 

            var get_git_link = document.getElementById('git_link');
                get_git_link.setAttribute('href', data.html_url);
                get_git_link.setAttribute('target', '_blank');

                document.getElementById('user_name').value = '';
            
            if(data.message == 'Not Found')
            {
                card_div.style = 'display:none';
                document.getElementById('error_div').style = 'display:block';       
            }
           
        })
        .catch(err => console.log(err))          
    }

    else
    {
        alert('Please Enter Username')
    }
}