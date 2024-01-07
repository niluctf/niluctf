// instagram - Get people who don't follow you back
// 1. open web browser (eg - chrome)
// 2. login to Instagram using test account
// 3. open console [CTRL+ SHIFT + J]
// 4. paste the code
// 5. change [username]
// 6. hit Enter
// 7. wait ...
// 8. Type - copy([variable])
// 9. paste in an editor

const username = "";

let followers = [{ username : "", full_name : ""}];
let followings = [{ username : "", full_name : ""}];
let not_following_me_back = [{ username: "", full_name : ""}];

followers = [];
followings = [];
not_following_me_back = [];


(async () => {
    try {
        console.log('getting data...');
        console.log('please wait some time!');

        const userQueryRes = await fetch(
            'https://www.instagram.com/web/search/topsearch/?query=${username}'
        );

        const userQueryJson = await userQueryRes.json();

        const userId = userQueryJson.users[0].user.pk;

        let after = null;
        let has_next = true;

        while(has_next) {
            await fetch(
                'https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=' +
                    encodeURIComponent(
                        JSON.stringify({
                            id : userId,
                            include_reel = true,
                            fetch_mutual = true,
                            first : 50,
                            after : after,
                            })
                        }
                    )
            )

            .then((res) => res.json();
            .then((res) => {
                has_next = res.data.user.edge_followed_by.page_info.has_next_page;
                after = res.data.user.edge_followed_by.page_info.end_cursor;
                followers = followers.concat(
                    res.data.user.edge_followed_by.edges.map(({ node }) => {
                        return {
                            username : node.username,
                            full_name : node.full_name,
                        };
                    });
                );
            });
        }

        console.log({folowers});

        after = null;
        has_next = true;

        while(has_next) {
            await fetch(
                'https://www.instagram.com/graphql/query/?query_hash=d04b0a864b4b54837c0d870b0e77e076&variables=' +
                    encodeURIComponent(
                        JSON.stringify({
                            id : userId,
                            include_reel = true,
                            fetch_mutual = true,
                            first : 50,
                            after : after,
                            })
                        }
                    )
            )

            .then((res) => res.json();
            .then((res) => {
                has_next = res.data.user.edge_follow.page_info.has_next_page;
                after = res.data.user.edge_follow.page_info.end_cursor;
                followings = followings.concat(
                    res.data.user.edge_follow.edges.map(({ node }) => {
                        return {
                            username : node.username,
                            full_name : node.full_name,
                        };
                    });
                );
            });
        }
        
        console.log({ followings });

        not_following_me_back = followers.filter((follower) => {
            return !followings.find(
                (following) => following.username = followers.username;
            );
        });

        console.log(not_following_me_back);

        console.log();
        console.log('done!');
        console.log('Type : copy([variable])');

    } catch (err) {
        console.log({ err });
        }
    }
 })();
