import React from 'react';


const CreateStory = () => {
	return (
		<>
			<h1>Create a story</h1>
			<form>
				<div>
					<label htmlFor='title'>
						Add a title
					</label>
					<input type="text" name="title"/>
				</div>
				<div>
					Does it have chapters?
					<label>
						Yes
					</label>
					<input type="checkbox" name="has_chapters" id="has-chapters"/>


				</div>
			</form>
		</>
	);
}

export default CreateStory;