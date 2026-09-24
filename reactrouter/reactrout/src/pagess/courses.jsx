const courses = [
	{ title: 'Modern JavaScript', level: 'Beginner friendly', description: 'Build a solid foundation with the language of the web.' },
	{ title: 'React Foundations', level: 'Build confidently', description: 'Create responsive interfaces with components and state.' },
	{ title: 'Async JavaScript', level: 'Practical patterns', description: 'Work with promises, APIs, and data that arrives later.' },
]

function Courses() {
	return (
		<main className="page content-page courses-page">
			<p className="eyebrow">THE COURSE LIBRARY</p>
			<h1>Choose your next challenge.</h1>
			<p className="intro">Short, focused paths for building a stronger web development toolkit.</p>
			<div className="course-list">
				{courses.map((course, index) => (
					<article className="course-card" key={course.title}>
						<span className="course-number">0{index + 1}</span>
						<div><p className="course-level">{course.level}</p><h2>{course.title}</h2><p>{course.description}</p></div>
						<button className="course-link" type="button" aria-label={`Start ${course.title}`}>Start <span aria-hidden="true">-&gt;</span></button>
					</article>
				))}
			</div>
		</main>
	)
}

export default Courses
