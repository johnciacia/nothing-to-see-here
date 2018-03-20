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
} = InspectorControls

const {PostSelectButton} = window.hm.components;

registerBlockType('tempo-layout-builder/article', {
    title: __('Article'),
    icon: 'index-card',
    category: 'layout',
    attributes: {
        postID: {
            type: 'number',
        },
        mediaURL: {
            type: 'string',
        }
    },
    edit: (props) => {

        const postSelected = posts => {
            props.setAttributes({
                mediaURL: posts[0].featured_media_src,
            });
        }

        const inspectorControls = (
            <InspectorControls key="inspector">
                <h3>Hello, World!</h3>
                <PostSelectButton btnProps={ {isLarge: true} } onSelect={postSelected}>
                    Select Article
                </PostSelectButton>
            </InspectorControls>
        );

        const placeHolder = (
            <div>
                <div class="hero-image">
                    <div class="info-caption">Latest Content</div>
                </div>
                <div>
                    <div class="category"><span class="redacted">Uncategorized</span></div>
                    <div class="title"><span
                        class="redacted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>
                    <div class="summary"><span class="redacted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum nulla. Duis fringilla eros mi, et dictum lacus consectetur ut. Phasellus commodo augue quis mauris imperdiet consequat.</span>
                    </div>
                </div>
            </div>
        );

        const article = (
            <div>
                <img src={props.attributes.mediaURL}/>
                <div>
                    <div class="category"><span class="redacted">Uncategorized</span></div>
                    <div class="title"><span
                        class="redacted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>
                    <div class="summary"><span class="redacted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum nulla. Duis fringilla eros mi, et dictum lacus consectetur ut. Phasellus commodo augue quis mauris imperdiet consequat.</span>
                    </div>
                </div>
            </div>
        )

        return [
            props.isSelected && inspectorControls,
            !props.attributes.mediaURL && placeHolder,
            props.attributes.mediaURL && article
        ];
    },
    save: props => {
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
