import data from "../server/data.json";

const useAppService = () => {
    const _apiBase = data;
    const _apiData = 'https://staging.greenexenergy.com/wp-json/wp/v2/pages';

    const getResource = async route => {
        let res = await fetch(_apiData);

        if(!res.ok) {
            throw new Error(`Could not fetch ${_apiData}, status: ${res.status}`);
        }

        let data = await res.json();
        return _transformData(data, route);
    }

    const getContentSection = async (route = '') => {
        let res = await fetch(_apiData);

        if(!res.ok) {
            throw new Error(`Could not fetch ${_apiData}, status: ${res.status}`);
        }

        let data = await res.json();
        return _transformContentSection(data, route);
    }

    const _transformData = (data, route) => {
        // console.log(data[0].acf);
        return data[0].acf[route];
    }

    const _transformContentSection = (data, route) => {
        // console.log('tansform content section');
        // console.log(route);
        // console.log(data[0].acf.content_section);
        
        let contentSection = data[0].acf.content_section;
        
        let res = contentSection.reduce((res, item) => {
            let contentType = item.content_type;
            // console.log(contentType);

            if(item.content_type == 'parallax' && item[contentType].section_title == route) {

                res.push(
                    {
                        "link": item[contentType].image,
                        "alt": item[contentType].alt
                    }
                )

                return res;
            }

            if(item[contentType].section_title == route) {
                // console.log('item[contentType].section_title == route');
                // console.log(item);
                // console.log(item[contentType].section);


                res.push(
                    {
                        "sectionTitle": item[contentType].section_title,
                        "id": item[contentType].id,
                        "content": _transforSection(item[contentType].section)
                    }
                )

                // console.log(res);

                return res;
            }

            return res;
        }, []);

        // console.log(res);
        return res[0];
    }

    const _transforSection = (section) => {
        let content = [];
        // console.log('section');
        // console.log(section);

        let res = section.map(el => {
            let contentType = el.content_type;
            // console.log('_transforSection')
            // console.log(contentType);

            return content.push(
                {
                    [contentType]: el[contentType]
                }
            );
        })

        // console.log('content');
        // console.log(content);
        return content;
    }

    const getData = (key = _apiBase) => {
        const res = _apiBase[key];
        return res;
    }

    return { getData, getResource, getContentSection };
}

export default useAppService;