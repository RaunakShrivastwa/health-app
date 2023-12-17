import React from 'react'

function BlogPost({ blog }) {
    console.log("Your blog ",blog);
    return (
        <div class="row row-cols-2 row-cols-md-3 g-4">
            {
                blog?.map((item) => (
                    <div class="col">
                        <div class="card text-center">
                        <h4>{item?.name}</h4>
                            <img src={item?.image} class="card-img-top" alt="..." />
                           
                            <div class="card-body">
                                <p class="card-title">{item?.feedback}</p>
                                <div class="rating">
  <input type="radio" id="star5" name="rating" value="5"/>
  <label for="star5"></label>
  <input type="radio" id="star4" name="rating" value="4"/>
  <label for="star4"></label>
  <input type="radio" id="star3" name="rating" value="3"/>
  <label for="star3"></label>
  <input type="radio" id="star2" name="rating" value="2"/>
  <label for="star2"></label>
  <input type="radio" id="star1" name="rating" value="1"/>
  <label for="star1"></label>
</div>

                            </div>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default BlogPost