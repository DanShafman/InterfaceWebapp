import PropTypes from 'prop-types';

class AccordionSection extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Object).isRequired,
      isOpen: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      this.props.onClick(this.props.label);
    };
  
    render() {
      const {
        onClick,
        props: { isOpen, label },
      } = this;
  
      return (
        <div
          style={{
            background: isOpen ? '#fae042' : '#6db65b',
            border: '1px solid #008f68',
            padding: '5px 10px',
          }}
        >
          <div onClick={onClick} style={{ cursor: 'pointer' }}>
            {label}
            <div style={{ float: 'right' }}>
              {!isOpen && <span>&#9650;</span>}
              {isOpen && <span>&#9660;</span>}
            </div>
          </div>
          {isOpen && (
            <div
              style={{
                background: '#6db65b',
                border: '2px solid #008f68',
                marginTop: 10,
                padding: '10px 20px',
              }}
            >
              {this.props.children}
            </div>
          )}
        </div>
      );
    }
  }
  
  class Accordion extends Component {
    static propTypes = {
      allowMultipleOpen: PropTypes.bool,
      children: PropTypes.instanceOf(Object).isRequired,
    };
  
    constructor(props) {
      super(props);
  
      const openSections = {};
  
      this.props.children.forEach(child => {
        if (child.props.isOpen) {
          openSections[child.props.label] = true;
        }
      });
  
      this.state = { openSections };
    }
  
    onClick = label => {
      const {
        props: { allowMultipleOpen },
        state: { openSections },
      } = this;
  
      const isOpen = !!openSections[label];
  
      if (allowMultipleOpen) {
        this.setState({
          openSections: {
            ...openSections,
            [label]: !isOpen
          }
        });
      } else {
        this.setState({
          openSections: {
            [label]: !isOpen
          }
        });
      }
    };
  
    render() {
      const {
        onClick,
        props: { children },
        state: { openSections },
      } = this;
  
      return (
        <div style={{ border: '2px solid #008f68' }}>
          {children.map(child => (
            <AccordionSection
              isOpen={!!openSections[child.props.label]}
              label={child.props.label}
              onClick={onClick}
            >
              {child.props.children}
            </AccordionSection>
          ))}
        </div>
      );
    }

    renderInMain() {
        return (
            <Accordion style={{color: 'blue'}}>
                <div label='Alligator Mississippiensis'>
                    <p>
                    <strong>Common Name:</strong> American Alligator
                    </p>
                    <p>
                    <strong>Distribution:</strong> Texas to North Carolina, US
                    </p>
                    <p>
                    <strong>Endangered Status:</strong> Currently Not Endangered
                    </p>
                </div>
                <div label='Alligator Sinensis'>
                    <p>
                    <strong>Common Name:</strong> Chinese Alligator
                    </p>
                    <p>
                    <strong>Distribution:</strong> Eastern China
                    </p>
                    <p>
                    <strong>Endangered Status:</strong> Critically Endangered
                    </p>
                </div>
                </Accordion>
        );
    }
}