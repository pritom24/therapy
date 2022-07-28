import React from 'react';
import './blogcection.css'

function BlogSection({heading, peragraphOne, reverse, image}) {
    return (
      <>
  <div className="myrow-uneven">
	<div className="mycol-left">
		<div className="myrow">
			<div className="mycol">
				<header className="blog-header">
					<h2>
						Out and About
					</h2>
					<p>Best shops in town,<span className="date">&nbsp;April 2, 2018</span></p>
				</header>
				<img className='style-img' src="https://images.unsplash.com/photo-1517762340357-3a82e505f7c4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9814a4cd6efc15605f6a7a26acbf94e5&auto=format&fit=crop&w=2264&q=80"/>
				<p><strong>In this post</strong> you'll find all the coolest, hippest and most skilled tattoo shops across the World.Sed mattis nunc id lorem euismod placerat...</p>
				<div className="post-btm-bar">
					<button className="likes"><i className="fas fa-thumbs-up"></i> Like</button>
					<button className="replies">Replies <span className="count">26</span></button>
				</div>
			</div>
		</div>

		<div className="myrow">
			<div className="mycol">
				<header className="blog-header">
					<h2>
						Tattoos and Work
					</h2>
					<p>Stigmas attached to tattoos<span className="date">&nbsp;March 30, 2018</span></p>
				</header>
				<img className='style-img' src="https://images.unsplash.com/photo-1471880332732-86cdafcb1ff4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=526158b2bdb24d5ce3ed2487c48df058&auto=format&fit=crop&w=2250&q=80"/>
				<p><strong>In this post</strong> you'll find all the coolest, hippest and most skilled tattoo shops across the World.Sed mattis nunc id lorem euismod placerat...</p>
				<div className="post-btm-bar">
					<button className="likes"><i className="fas fa-thumbs-up"></i> Like</button>
					<button className="replies">Replies <span className="count">42</span></button>
				</div>
			</div>
		</div>

		<div className="myrow">
			<div className="mycol">
				<header className="blog-header">
					<h2>
						Below the cuff
					</h2>
					<p>Are below the cuff tattoos good<span className="date">&nbsp;March 28, 2018</span></p>
				</header>
				<img className='style-img' src="https://images.unsplash.com/photo-1505545199769-29c6462bf3c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93ea594822d2cdc900df5ab31cc12056&auto=format&fit=crop&w=2250&q=80"/>
				<p><strong>In this post</strong> you'll find all the coolest, hippest and most skilled tattoo shops across the World. Sed mattis nunc id lorem euismod placerat...</p>
				<div className="post-btm-bar">
					<button className="likes"><i className="fas fa-thumbs-up"></i> Like</button>
					<button className="replies">Replies <span className="count">120</span></button>
				</div>
			</div>
		</div>

	</div>

	{/* <!-- SIDEBAR --> */}
	<div className="mycol-right">
		<section className="profile">
			<div className="myrow author">
				<div className="mycol author">
					<img className='style-img' src="https://images.unsplash.com/photo-1500483849987-5a06418e3fb6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=26677ec5806f174e68d5ac9714974986&auto=format&fit=crop&w=2250&q=80"/>
					<div className="abt">
						<h3 className="profile-title">Megan Moore</h3>
						<p>Megan is a lifestyle blogger who loves to write about her passions of tattoos. </p>
					</div>
				</div>
			</div>
		</section>

		<section className="popular-posts">
			<header className="sidebar-header">
				<h2>Popular Posts</h2>
			</header>
			<div className="myrow">
				<div className="mycol p-posts">
					<div className="p-img">
						<img src="https://images.unsplash.com/photo-1454329001438-1752daa90420?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=becd834394b89fc2fccb45a7bc3f525a&auto=format&fit=crop&w=2250&q=80"/>
					</div>
					<div className="p-text">
						<h5>Adventures</h5>
						<p>Sed mattis nunct...</p>
					</div>
				</div>
			</div>

			<div className="myrow">
				<div className="mycol p-posts">
					<div className="p-img">
						<img src="https://images.unsplash.com/photo-1453814235491-3cfac3999928?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f05da4077424625439e156f87d204797&auto=format&fit=crop&w=2250&q=80"/>
					</div>
					<div className="p-text">
						<h5>Art Walks</h5>
						<p>Sed mattis nunc...</p>
					</div>
				</div>
			</div>
			<div className="myrow">
				<div className="mycol p-posts">
					<div className="p-img">
						<img src="https://images.unsplash.com/photo-1519822356-4853be4346a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bdeea149c483827d9e839a10e87403c5&auto=format&fit=crop&w=2251&q=80"/>
					</div>
					<div className="p-text">
						<h5>Conventions</h5>
						<p>Sed mattis nunc...</p>
					</div>
				</div>
			</div>
			<div className="myrow">
				<div className="mycol p-posts">
					<div className="p-img">
						<img src="https://images.unsplash.com/photo-1469073082817-a29a4270b679?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=abb145dace8683d154f8e0eced31eda7&auto=format&fit=crop&w=2250&q=80"/>
					</div>
					<div className="p-text">
						<h5>New School</h5>
						<p>Sed mattis nunc...</p>
					</div>
				</div>
			</div>
			<div className="myrow">
				<div className="mycol p-posts">
					<div className="p-img">
						<img src="https://images.unsplash.com/photo-1479767574301-a01c78234a0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f32e2e491210be1d4ad5132b9a0c0bb4&auto=format&fit=crop&w=2250&q=80"/>
					</div>
					<div className="p-text">
						<h5>Traditional</h5>
						<p>Sed mattis nunc...</p>
					</div>
				</div>
			</div>
		</section>

		<section className="tag-cloud">
			<header className="sidebar-header">
				<h2>Tags</h2>
			</header>
			<div className="myrow">
				<div className="mycol">
					<span className="tag">Art</span>
					<span className="tag">Food</span>
					<span className="tag">Entertainment</span>
					<span className="tag">Machines</span>
					<span className="tag">Ink</span>
					<span className="tag">Clothing</span>
					<span className="tag">Weekends</span>
					<span className="tag">Vacation Spots</span>
					<span className="tag">Cars</span>
					<span className="tag">Tattoos</span>
					<span className="tag">Shops</span>
					<span className="tag">Love</span>
					<span className="tag">Ocean</span>
					<span className="tag">Design</span>
					<span className="tag">Development</span>
					<span className="tag">UX/UI</span>
					<span className="tag">Podcasts</span>
					<span className="tag">Colors</span>
					<span className="tag">Typography</span>
					<span className="tag">Shoes</span>
				</div>
			</div>
		</section>

		<section className="follow">
			<header className="sidebar-header">
				<h2>Follow me</h2>
			</header>
			<div className="myrow">
				<div className="mycol">
					<a href="#"><i className="fab fa-facebook-f"></i></a>
					<a href="#"><i className="fab fa-twitter"></i></a>
					<a href="#"><i className="fab fa-pinterest"></i></a>
					<a href="#"><i className="fab fa-instagram"></i></a>
					<a href="#"><i className="fab fa-snapchat"></i></a>
					<a href="#"><i className="fab fa-linkedin-in"></i></a>
				</div>
			</div>
		</section>

		<section className="subscribe">
			<header className="sidebar-header">
				<h2>Subscribe</h2>
			</header>
			<div className="myrow">
				<div className="mycol">
					<p>Enter your e-mail below and get notified on the latest blog posts.</p>
					<form>
						<input type="email" name="email" value="E-mail"/>
						<input type="submit"/>
					</form>
				</div>
			</div>

		</section>

	</div>
</div>


		</>
    
    );
}

export default BlogSection;