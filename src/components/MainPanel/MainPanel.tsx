import React, { ChangeEvent, Fragment, useState } from 'react';

import { Layout, Typography, Row, Col, Input, Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { IMode, IState } from '../../interfaces/interfaces';
import { clearAllFields, setOriginalText, loadTranslation } from '../../store/actions';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export const MainPanel: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	
	const originalText = useSelector((state: IState) => state.originalText)
	const translatedText = useSelector((state: IState) => state.translatedText)

	const [mode, setMode] = useState<IMode>('originalText');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const alphabetsRegex = /^[A-Za-z]+$/;
		if (event.target.value.match(alphabetsRegex)) {
			dispatch(setOriginalText(event.target.value));
			dispatch(loadTranslation(event.target.value)); 
		}
	}
	
	return (
		<Layout className="layout" style={{height: '100vh'}}>
			<Content style={{ padding: '50px', backgroundImage: `url('${process.env.PUBLIC_URL}/background.jpg')`, backgroundPosition: '50% 50%' }}>
				<Row gutter={{ xs: 8, sm: 16 }} style={{ maxWidth: '768px', marginLeft: 'auto', marginRight: 'auto' }}>
					<Col xs={{span: 12}}>
						<Title level={2} style={{textAlign: 'left', marginTop: '10px', marginBottom: '0' }}>Talk in code</Title>
					</Col>
					<Col xs={{span: 12}}>
						<Title level={4} style={{textAlign: 'right', marginTop: '10px', marginBottom: '0' }}>- .- .-.. -.- / .. -. / -.-. --- -.. .</Title>
					</Col>
					<Col xs={{span: 24}}>
						<Paragraph>Translate your message into Morse Code and share it with your friends.</Paragraph>
					</Col>
					<div className='divider' style={{marginTop: '40px', marginBottom: '40px' }}></div>
					<Col xs={{span: 24}}>
						<Row gutter={{ xs: 8, sm: 16 }}>
							<Col xs={{span: 20}}>
								<Input pattern="[a-zA-Z]+" placeholder="ENTER YOUR MESSAGE TO BE CODED HERE" value={ mode === 'originalText' ? originalText : translatedText } onChange={handleChange} />
							</Col>
							<Col xs={{span: 4}}>
								<img src={`${process.env.PUBLIC_URL}/x.png`} alt='x' onClick={() => { dispatch(clearAllFields()); setMode('originalText') }} style={{cursor: 'pointer', width: '60px'}}/>
							</Col>
						</Row>
						<div className='divider' style={{marginTop: '70px', marginBottom: '30px' }}></div>
						{ mode === 'originalText' &&
							<Button type="primary" onClick={()=>{ setMode('translatedText') }}>Translate my message to Morse Code</Button>
						}
						{ mode === 'translatedText' &&
							<Fragment>
								<Button type="primary" style={{marginRight: '30px'}}>Tweet</Button>
								<Button type="primary" style={{marginRight: '30px'}}>Facebook it</Button>
								<Button type="primary" style={{marginRight: '30px'}}>G+ it</Button>
							</Fragment>
						}
					</Col>
				</Row>				
			</Content>
		</Layout>
	)
}