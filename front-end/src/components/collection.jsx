import React, { useState, useEffect } from 'react';
import Content from './Content';

const Collection = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost/TOOLHUB/back-end/api/get_categories.php');
                const data = await response.json();
                if (data && data.records) {
                    setCategories(data.records);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section id="collection">
            <div className="collections container">
                {categories.map((category, index) => (
                    <Content
                        key={category.id_categories}
                        className={`content${index + 1}`}
                        imageSrc={`/src/assets/img/img-category/${category.image}`}
                        imageAlt={`${category.nom} collection`}
                        title={category.nom}
                    />
                ))}
            </div>
        </section>
    );
};

export default Collection;
