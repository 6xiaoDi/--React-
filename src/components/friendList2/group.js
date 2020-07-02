import React from "react";

export default class Group extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
    }

    render() {
        let {expanded, data: {title, list}} = this.props;

        return (
            <dl className={['friend-group', expanded ? 'expanded' : ''].join(' ')}>
                <dt onClick={this.toggle}>{title}</dt>
                {
                    list.map( item =>
                        <dd key={item.name}>
                            {item.name}
                        </dd>
                    )
                }
            </dl>
        )
    }

}