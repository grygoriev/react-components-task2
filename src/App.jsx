import styles from './App.module.css';
import data from './assets/data.json';
import { useState } from 'react';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const clickPrev = () => {
		setActiveIndex(activeIndex - 1);
	};
	const clickNext = () => {
		setActiveIndex(activeIndex + 1);
	};
	const clickStartFromBegin = () => {
		setActiveIndex(0);
	};

	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	console.log(steps);

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((item, index) => (
							<li
								className={
									styles['steps-item'] +
									' ' +
									(index <= activeIndex ? styles.done : '') +
									' ' +
									(index === activeIndex ? styles.active : '')
								}
								key={item.id}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>
								{item.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={isFirstStep}
							onClick={clickPrev}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={isLastStep ? clickStartFromBegin : clickNext}
						>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
