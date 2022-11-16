import useTitle from '../useTitle/useTitle';
import useContent from '../useContent/useContent';

const useSection = (title, content) => {
    const sectionTitle = useTitle(title);
    const sectionContent = useContent(content);

    return (
        <section className="content-section">
            { sectionTitle }
            <div className='content-container'>
                { sectionContent }
            </div>
        </section>
    )
}

export default useSection;