import React from 'react'

const ProductOption = ({data}) => {
    const renderOptions = () => {
        if (data !== undefined) {
            return (
                Object.keys(data).map((nameOption) => {
                    return (
                        <div className='options-item' key={data[nameOption].id}>
                            <div className="options-item-name">
                                <span>{data[nameOption].name}</span>
                            </div>
                            <div className="options-item-value">
                                <span>{data[nameOption].value}</span>
                            </div>
                        </div>
                    )
                })
            )
        } else {
            return null
        }
    };

    return (
        <div className='options-container'>
            <div className="options-container-head">
                <h5>Options</h5>
                <h5>Value</h5>
            </div>
            {renderOptions()}
        </div>
    )
};

export default ProductOption

