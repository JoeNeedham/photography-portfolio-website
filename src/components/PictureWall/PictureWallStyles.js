import styled from 'styled-components'

export const PhotoGallery = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin: 4rem;
    margin-top: 6rem;
	grid-gap: 2rem;

	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const PictureColumn = styled.div`
	display: flex;
	// flex-flow: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	box-shadow: 0 0 32px 8px #d0d0d0;
	border-radius: 20px;
`;

export const PictureWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
    margin-left: 2rem;
`;