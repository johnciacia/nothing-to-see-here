const {__} = wp.i18n;
const {
    registerBlockType,
    Editable,
    MediaUpload,
    source: {
        attr,
        children
    },
    InspectorControls,
    InnerBlocks,
} = wp.blocks;

const {
    Button,
    withAPIData
} = wp.components;

const {
    ToggleControl,
    TextControl
} = InspectorControls

const {PostSelectButton, PostSelectModal} = window.hm.components;


import React from 'react';
import wp from 'wp';
import {Component} from '@wordpress/element';


class Article extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            mediaURL: false,
            title: '',
        }
        this.postSelected = this.postSelected.bind(this)
    }

    postSelected(data) {
        this.setState({
            mediaURL: data[0].featured_media_src,
            title: data[0].title.rendered
        })
    }


    render() {
        const {attributes, isSelected, setAttributes} = this.props;

        if (this.state.mediaURL) {
            return <div className="article-container">
                <div class="hero-image foo" style={{backgroundImage: "url('" + this.state.mediaURL + "')"}}>
                </div>
                <div>
                    <div class="category"><span>Uncategorized</span></div>
                    <div class="title"><span>{this.state.title}</span></div>
                </div>
            </div>
        } else {
            return <div className="article-container">
                <div class="hero-image">
                    <div class="info-caption">
                        <PostSelectButton btnProps={ {isLarge: true} } onSelect={this.postSelected}>
                            Select Article
                        </PostSelectButton>
                    </div>
                </div>
                <div>
                    <div class="category"><span class="redacted">Uncategorized</span></div>
                    <div class="title"><span
                        class="redacted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>
                    <div class="summary"><span class="redacted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum nulla. Duis fringilla eros mi, et dictum lacus consectetur ut. Phasellus commodo augue quis mauris imperdiet consequat.</span>
                    </div>
                </div>
            </div>
        }
    }
}


registerBlockType('tempo-layouts/standard', {
    title: __('Standard Bucket'),
    icon: 'index-card',
    category: 'layout',
    attributes: {
        title: {
            type: 'array',
            source: 'children',
            selector: 'h2',
        },
        mediaID: {
            type: 'number',
        },
        mediaURL: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src',
        },
    },
    getEditWrapperProps: (attributes) => {
        return {'data-align': 'wide'};
    },
    edit: (props) => {

        return [
            <div class="container">
                <article class="tile">
                    <Article />
                </article>
                <article class="tile">
                    <Article/>
                </article>
                <aside class="tile">
                    <article>
                        <Article />
                    </article>
                    <article>
                        <Article />
                    </article>
                    <article>
                        <Article />
                    </article>
                </aside>
                <div className="clearfix"></div>
            </div>

        ];
    },
    save: props => {
        debugger;
        const {
            className,
            attributes: {
                title,
                mediaURL,
            }
        } = props;
        return (
            <div className={ className }>
                <h2>
                    { title }
                </h2>
                {
                    mediaURL && (
                        <img className="recipe-image" src={ mediaURL }/>
                    )
                }
            </div>
        );
    }
});
