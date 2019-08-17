import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import {
    Container,
    Icon,
    Badge,
    Grid, Row, Cell,
    Activity, ActivityModal,
    Accordion,
    AccordionFrame,
    Checkbox,
    Radio,
    Switch,
    BottomNav, BottomNavItem,
    Button,
    CommandButton,
    ImageButton,
    Shortcut,
    Breadcrumbs, BreadcrumbsItem,
    InfoButton,
    Select,
    Input,
    ActionButton, MultiAction, MultiActionItem,
    Tag,
    ToolBar, ToolButton,
    ClickOutside,
    Gravatar, Adsense,
    Dialog, Pagination, Textarea, InputFile,
    Dropdown, Modal, AppBar, AppBarMenu, AppBarBrand, AppBarItem, Collapse, ButtonGroup,
    Tabs, Tab, SplitButton, Progress
} from "../../src/index";

import MainMenu from "./MainMenu";
import "../css/demo.less";

const autocompleteList = ["Ukraine", "USA", "Canada", "Marokko", "Singapur"];

const customButtons = [
    {
        title: '',
        icon: 'apple',
        image: '',
        cls: 'info',
        onClick: () => {alert('info!')}
    },
    {
        title: '',
        icon: 'rocket',
        iconPrefix: 'fa fa-',
        image: '',
        cls: 'alert',
        onClick: () => {alert('halo!')}
    }
];

const dialogButtons = [
    {
        title: 'Ok',
        cls: 'info',
        onClick: () => {console.log('Dialog Ok!')}
    },
    {
        title: 'Cancel',
        onClick: () => {console.log('Dialog Cancel!')}
    }
];

export default class Demo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            dialogOpen: false,
            activityOpen: false,
            modalOpen: false,
            collapsibleOpen: false,
        };

        this.toggleDialog = this.toggleDialog.bind(this);
        this.toggleActivity = this.toggleActivity.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.closeActivity = this.closeActivity.bind(this);
        this.paginationClick = this.paginationClick.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.toggleCollapsible = this.toggleCollapsible.bind(this);
    }

    paginationClick(val){
        alert(val);
    }

    toggleDialog(){
        this.setState({
            dialogOpen: !this.state.dialogOpen
        })
    }

    toggleActivity(){
        this.setState({
            activityOpen: !this.state.activityOpen
        })
    }

    closeDialog(){
        this.setState({
            dialogOpen: false
        })
    }

    closeActivity(){
        this.setState({
            activityOpen: false
        })
    }

    closeModal() {
        this.setState({
            modalOpen: false
        })
    };

    openModal(){
        this.setState({
            modalOpen: true
        })
    };

    toggleCollapsible(){
        this.setState({
            collapsibleOpen: !this.state.collapsibleOpen
        })
    }

    render(){
        return (
            <Container>
                <MainMenu/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <Grid>
                    <h2 className="text-light">&lt;Progress/&gt;</h2>
                    <Row>
                        <Cell cls={'cell-md-4'}>
                            <Progress value={35}/>
                        </Cell>
                        <Cell cls={'cell-md-4'}>
                            <Progress value={35} buffer={75}/>
                        </Cell>
                        <Cell cls={'cell-md-4'}>
                            <Progress value={95} buffer={75} showValue={true}/>
                        </Cell>
                    </Row>
                    <br/>
                    <Row>
                        <Cell cls={'cell-md-4'}>
                            <Progress variant={'line'}/>
                        </Cell>
                        <Cell cls={'cell-md-4'}>
                            <Progress variant={'load'} value={35} buffer={75}/>
                        </Cell>
                        <Cell cls={'cell-md-4'}>
                            <Progress value={35} buffer={75} clsBar={'bg-orange'} clsBuffer={'bg-cyan'} clsBack={'bg-darkSteel'}/>
                        </Cell>
                    </Row>


                    <br/>
                    <h2 className="text-light">&lt;SplitButton/&gt;</h2>
                    <Row>
                        <Cell cls={'cell-md-3'}>
                            <SplitButton>
                                <Button>Reply</Button>
                                <Button/>
                                <ul className={'d-menu'}>
                                    <li><a href={'#'}>Item 1</a></li>
                                    <li><a href={'#'}>Item 2</a></li>
                                    <li><a href={'#'}>Item 3</a></li>
                                </ul>
                            </SplitButton>
                        </Cell>
                        <Cell cls={'cell-md-3'}>
                            <SplitButton>
                                <Button cls={'primary'}>Reply</Button>
                                <Button cls={'alert'}/>
                                <ul className={'d-menu'}>
                                    <li><a href={'#'}>Item 1</a></li>
                                    <li><a href={'#'}>Item 2</a></li>
                                    <li><a href={'#'}>Item 3</a></li>
                                </ul>
                            </SplitButton>
                        </Cell>
                        <Cell cls={'cell-md-3'}>
                            <SplitButton  clsMainButton={'warning rounded'} clsSplitButton={'info rounded'}>
                                <Button>Reply</Button>
                                <Button/>
                                <ul className={'d-menu'}>
                                    <li><a href={'#'}>Item 1</a></li>
                                    <li><a href={'#'}>Item 2</a></li>
                                    <li><a href={'#'}>Item 3</a></li>
                                </ul>
                            </SplitButton>
                        </Cell>
                        <Cell cls={'cell-md-3'}>
                            <SplitButton  clsMainButton={'success outline'} clsSplitButton={'info rounded'}>
                                <Button>Reply</Button>
                                <Button>...</Button>
                            </SplitButton>
                        </Cell>
                    </Row>

                    <br/>
                    <h2 className="text-light">&lt;Select/&gt;</h2>
                    <Row>
                        <Cell cls="cell-md-4">
                            <Select>
                                <optgroup label="Physical servers">
                                    <option value="dedicated_corei3_hp">Core i3 (hp)</option>
                                    <option value="dedicated_pentium_hp">Pentium (hp)</option>
                                    <option value="dedicated_smart_corei3_hp">Smart Core i3 (hp)</option>
                                </optgroup>
                                <optgroup label="Virtual hosting">
                                    <option value="mini">Mini</option>
                                    <option value="site">Site</option>
                                    <option value="portal">Portal</option>
                                </optgroup>
                                <optgroup label="Virtual servers">
                                    <option value="evps0">eVPS-TEST (30 дней)</option>
                                    <option value="evps1">eVPS-1</option>
                                    <option value="evps2">eVPS-2</option>
                                </optgroup>
                            </Select>
                        </Cell>
                        <Cell cls="cell-md-4">
                            <Select value={'mini'} multiple={false}>
                                <optgroup label="Physical servers">
                                    <option value="dedicated_corei3_hp">Core i3 (hp)</option>
                                    <option value="dedicated_pentium_hp">Pentium (hp)</option>
                                    <option value="dedicated_smart_corei3_hp">Smart Core i3 (hp)</option>
                                </optgroup>
                                <optgroup label="Virtual hosting">
                                    <option value="mini">Mini</option>
                                    <option value="site">Site</option>
                                    <option value="portal">Portal</option>
                                </optgroup>
                                <optgroup label="Virtual servers">
                                    <option value="evps0">eVPS-TEST (30 дней)</option>
                                    <option value="evps1">eVPS-1</option>
                                    <option value="evps2">eVPS-2</option>
                                </optgroup>
                            </Select>
                        </Cell>
                        <Cell cls="cell-md-4">
                            <Select value={['mini', 'dedicated_corei3_hp']} multiple={true}>
                                <optgroup label="Physical servers">
                                    <option value="dedicated_corei3_hp">Core i3 (hp)</option>
                                    <option value="dedicated_pentium_hp">Pentium (hp)</option>
                                    <option value="dedicated_smart_corei3_hp">Smart Core i3 (hp)</option>
                                </optgroup>
                                <optgroup label="Virtual hosting">
                                    <option value="mini">Mini</option>
                                    <option value="site">Site</option>
                                    <option value="portal">Portal</option>
                                </optgroup>
                                <optgroup label="Virtual servers">
                                    <option value="evps0">eVPS-TEST (30 дней)</option>
                                    <option value="evps1">eVPS-1</option>
                                    <option value="evps2">eVPS-2</option>
                                </optgroup>
                            </Select>
                        </Cell>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Cell cls="cell-md-4">
                            <Select fieldState={'success'}>
                                <optgroup label="Physical servers">
                                    <option value="dedicated_corei3_hp">Core i3 (hp)</option>
                                    <option value="dedicated_pentium_hp">Pentium (hp)</option>
                                    <option value="dedicated_smart_corei3_hp">Smart Core i3 (hp)</option>
                                </optgroup>
                                <optgroup label="Virtual hosting">
                                    <option value="mini">Mini</option>
                                    <option value="site">Site</option>
                                    <option value="portal">Portal</option>
                                </optgroup>
                                <optgroup label="Virtual servers">
                                    <option value="evps0">eVPS-TEST (30 дней)</option>
                                    <option value="evps1">eVPS-1</option>
                                    <option value="evps2">eVPS-2</option>
                                </optgroup>
                            </Select>
                        </Cell>
                        <Cell cls="cell-md-4">
                            <Select value={'mini'} fieldState={'error'} errorMessage={'Select valid value'} clsSelected={'fg-cyan text-bold'}>
                                <optgroup label="Physical servers">
                                    <option value="dedicated_corei3_hp">Core i3 (hp)</option>
                                    <option value="dedicated_pentium_hp">Pentium (hp)</option>
                                    <option value="dedicated_smart_corei3_hp">Smart Core i3 (hp)</option>
                                </optgroup>
                                <optgroup label="Virtual hosting">
                                    <option value="mini">Mini</option>
                                    <option value="site">Site</option>
                                    <option value="portal">Portal</option>
                                </optgroup>
                                <optgroup label="Virtual servers">
                                    <option value="evps0">eVPS-TEST (30 дней)</option>
                                    <option value="evps1">eVPS-1</option>
                                    <option value="evps2">eVPS-2</option>
                                </optgroup>
                            </Select>
                        </Cell>
                        <Cell cls="cell-md-4">
                            <Select cls={'required'} value={['mini', 'dedicated_corei3_hp']} multiple={true} clsTag={'info'}>
                                <optgroup label="Physical servers">
                                    <option value="dedicated_corei3_hp">Core i3 (hp)</option>
                                    <option value="dedicated_pentium_hp">Pentium (hp)</option>
                                    <option value="dedicated_smart_corei3_hp">Smart Core i3 (hp)</option>
                                </optgroup>
                                <optgroup label="Virtual hosting">
                                    <option value="mini">Mini</option>
                                    <option value="site">Site</option>
                                    <option value="portal">Portal</option>
                                </optgroup>
                                <optgroup label="Virtual servers">
                                    <option value="evps0">eVPS-TEST (30 дней)</option>
                                    <option value="evps1">eVPS-1</option>
                                    <option value="evps2">eVPS-2</option>
                                </optgroup>
                            </Select>
                        </Cell>
                    </Row>

                    <h2 className={'text-light'}>&lt;Input/&gt;</h2>
                    <Row>
                        <Cell cls="cell-md-4">
                            <h6>default</h6>
                            <Input placeholder='Input value' value={123}/>
                        </Cell>
                        <Cell cls="cell-md-4">
                            <h6>password</h6>
                            <Input placeholder='Enter a password' type='password'/>
                        </Cell>
                        <Cell cls="cell-md-4">
                            <h6>search</h6>
                            <Input placeholder='Search...' search={true} onSearch={ val => console.log(val) } />
                        </Cell>
                    </Row>

                    <Row>
                        <Cell cls="cell-md-4">
                            <h6>history</h6>
                            <Input history={true}/>
                        </Cell>
                        <Cell cls="cell-md-4">
                            <h6>autocomplete</h6>
                            <Input autocomplete={autocompleteList} />
                        </Cell>
                        <Cell cls="cell-md-4">
                            <h5>custom buttons</h5>
                            <Input customButtons={customButtons}/>
                        </Cell>
                    </Row>

                    <Row>
                        <Cell cls="cell-md-4">
                            <h6>state required</h6>
                            <Input cls={'required'} />
                        </Cell>
                        <Cell cls="cell-md-4">
                            <h6>state error</h6>
                            <Input fieldState={'error'} errorMessage={'Enter a valid value'}/>
                        </Cell>
                        <Cell cls="cell-md-4">
                            <h6>state success</h6>
                            <Input fieldState={'success'} />
                        </Cell>
                    </Row>

                    <Row>
                        <Cell cls="cell-md-3">
                            <h6>prepend</h6>
                            <Input value='Input value' prepend='Prepend:'/>
                        </Cell>
                        <Cell cls="cell-md-3">
                            <h6>prepend icon</h6>
                            <Input value='Input value' prepend={<Icon name='rocket'/>}/>
                        </Cell>
                        <Cell cls="cell-md-3">
                            <h6>append</h6>
                            <Input value='Input value' append='%'/>
                        </Cell>
                        <Cell cls="cell-md-3">
                            <h6>append icon</h6>
                            <Input value='Input value' append={<Icon name='rocket'/>}/>
                        </Cell>
                    </Row>

                    <br/>
                    <h2 className="text-light">&lt;Checkbox/&gt;, &lt;Radio/&gt;, &lt;Switch/&gt;</h2>
                    <Row>
                        <Cell cls="cell-md-4">
                            <div>
                                <Checkbox name="check1"/>
                                <Checkbox name="check2" checked/>
                                <Checkbox name="check3" disabled/>
                                <Checkbox name="check4" checked disabled/>
                                <Checkbox name="check5" caption="my checkbox"/>
                            </div>
                            <div>
                                <Checkbox name="check1" variant={2}/>
                                <Checkbox name="check2" checked variant={2}/>
                                <Checkbox name="check3" disabled variant={2}/>
                                <Checkbox name="check4" checked disabled variant={2}/>
                                <Checkbox name="check5" caption="my checkbox" variant={2}/>
                            </div>
                        </Cell>
                        <Cell cls="cell-md-4">
                            <div>
                                <Radio name="radio1_1" value={1}/>
                                <Radio name="radio1_1" value={2} checked/>
                                <Radio name="radio1_2" disabled/>
                                <Radio name="radio1_3" checked disabled/>
                                <Radio name="radio1_4" caption="my radio"/>
                            </div>
                            <div>
                                <Radio name="radio2_1" checked variant={2}/>
                                <Radio name="radio2_1" variant={2}/>
                                <Radio name="radio2_2" disabled variant={2}/>
                                <Radio name="radio2_3" checked disabled variant={2}/>
                                <Radio name="radio2_4" caption="my radio" variant={2}/>
                            </div>
                        </Cell>
                        <Cell cls="cell-md-4">
                            <div>
                                <Switch name="switch1"/>
                                <Switch name="switch2" checked/>
                                <Switch name="switch3" disabled/>
                                <Switch name="switch4" checked disabled/>
                            </div>
                            <div>
                                <Switch name="switch1" variant={2}/>
                                <Switch name="switch2" checked variant={2}/>
                                <Switch name="switch3" disabled variant={2}/>
                                <Switch name="switch4" checked disabled variant={2}/>
                            </div>
                        </Cell>
                    </Row>

                    <br/>
                    <h2 className="text-light">&lt;Tabs/&gt;</h2>
                    <Row>
                        <Cell cls={'cell-md-4'}>
                            <Tabs cls={'tabs-expand'}>
                                <Tab>Home</Tab>
                                <Tab>Profile</Tab>
                                <Tab>Links</Tab>
                            </Tabs>
                        </Cell>
                        <Cell cls={'cell-md-4'}>
                            <Tabs cls={'tabs-expand'} position={'bottom'}>
                                <Tab>Home</Tab>
                                <Tab>Profile</Tab>
                                <Tab>Links</Tab>
                            </Tabs>
                        </Cell>
                        <Cell cls={'cell-md-2'}>
                            <Tabs cls={'tabs-expand'} position={'left'}>
                                <Tab>Home</Tab>
                                <Tab>Profile</Tab>
                                <Tab>Links</Tab>
                            </Tabs>
                        </Cell>
                        <Cell cls={'cell-md-2'}>
                            <Tabs cls={'tabs-expand'} position={'right'}>
                                <Tab>Home</Tab>
                                <Tab>Profile</Tab>
                                <Tab>Links</Tab>
                            </Tabs>
                        </Cell>
                    </Row>
                    <br/>
                    <Row>
                        <Cell cls={'cell-md-4'}>
                            <Tabs cls={'tabs-expand'} variant={'text'}>
                                <Tab>Home</Tab>
                                <Tab>Profile</Tab>
                                <Tab>Links</Tab>
                            </Tabs>
                        </Cell>
                        <Cell cls={'cell-md-4 d-flex flex-align-end'}>
                            <Tabs cls={'tabs-expand'} variant={'group'}>
                                <Tab>Home</Tab>
                                <Tab>Profile</Tab>
                                <Tab>Links</Tab>
                            </Tabs>
                        </Cell>
                        <Cell cls={'cell-md-4 d-flex flex-align-end'}>
                            <Tabs cls={'tabs-expand'} variant={'pills'}>
                                <Tab>Home</Tab>
                                <Tab>Profile</Tab>
                                <Tab>Links</Tab>
                            </Tabs>
                        </Cell>
                    </Row>


                    <h2 className="text-light">&lt;ButtonGroup/&gt;</h2>
                    <Row>
                        <Cell cls={'cell-md-4'}>
                            <ButtonGroup>
                                <Button active={true}>1</Button>
                                <Button>2</Button>
                                <Button>3</Button>
                            </ButtonGroup>
                        </Cell>
                        <Cell cls={'cell-md-4'}>
                            <ButtonGroup radio={true}>
                                <Button active={true}><Icon name={'paragraph-left'}/></Button>
                                <Button><Icon name={'paragraph-center'}/></Button>
                                <Button><Icon name={'paragraph-right'}/></Button>
                                <Button><Icon name={'paragraph-justify'}/></Button>
                            </ButtonGroup>
                        </Cell>
                        <Cell cls={'cell-md-4'}>
                            <ButtonGroup radio={true} cls={'border bd-cyan p-2 text-center'} clsActive={'alert'} clsButton={'m-1'}>
                                <Button active={true}>1</Button>
                                <Button>2</Button>
                                <Button>3</Button>
                            </ButtonGroup>
                        </Cell>
                    </Row>


                    <h2 className="text-light">&lt;Collapsible/&gt;</h2>
                    <Row>
                        <Cell>
                            <div>
                                <Button onClick={this.toggleCollapsible}>Toggle collapsible</Button>
                            </div>
                            <Collapse isOpen={this.state.collapsibleOpen}>
                                <div className={'border bd-default p-10'}>
                                    All those paralysis will be lost in nuclear fluxs like minerals in collision courses.
                                    All those paralysis will be lost in nuclear fluxs like minerals in collision courses.
                                    All those paralysis will be lost in nuclear fluxs like minerals in collision courses.
                                </div>
                            </Collapse>
                        </Cell>
                    </Row>


                    <h2 className="text-light">&lt;AppBar/&gt;</h2>
                    <Row>
                        <Cell cls={'cell-md-12'}>
                            <AppBar cls={'pos-relative z-dropdown'} hamburgerColor={'dark'}>
                                <AppBarBrand name={'Metro 4 for React'}/>
                                <AppBarMenu cls={'ml-auto'} >
                                    <li><a href={'#'}>Home</a></li>
                                    <li><a href={'#'}>Documentation</a></li>
                                    <Dropdown as={'li'}>
                                        <a href={'#'} className={'dropdown-toggle'}>Community</a>
                                        <ul className={'d-menu bg-light'}>
                                            <li><a href={'#'}>Forum</a></li>
                                            <li><a href={'#'}>Slack</a></li>
                                            <li><a href={'#'}>Viber</a></li>
                                            <Dropdown as={'li'} position={'relative'}>
                                                <a href={'#'} className={'dropdown-toggle'}>Social</a>
                                                <ul className={'d-menu bg-light'}>
                                                    <li><a href={'#'}>Facebook</a></li>
                                                    <li><a href={'#'}>Twitter</a></li>
                                                </ul>
                                            </Dropdown>
                                        </ul>
                                    </Dropdown>
                                    <li><a href={'#'}>GitHub</a></li>
                                </AppBarMenu>
                            </AppBar>
                        </Cell>
                    </Row>

                    <h2 className="text-light">&lt;Modal/&gt;</h2>
                    <Row>
                        <Cell>
                            <div>
                                <Button onClick={this.openModal}>Open modal</Button>
                            </div>
                            <Modal cls={'flex-center'} open={this.state.modalOpen} onClick={this.closeModal} overlayAlpha={.5}>
                                <Activity variant={'color'}/>
                            </Modal>
                        </Cell>
                    </Row>

                    <h2 className="text-light">&lt;Dropdown/&gt;</h2>
                    <Row>
                        <Cell cls={'cell-md-4'}>
                            <Dropdown>
                                <a href={'#'} className={'dropdown-toggle'}>Dropdown</a>
                                <ul className={'d-menu'}>
                                    <li><a href={'#'}>Item 1</a></li>
                                    <li><a href={'#'}>Item 2</a></li>
                                    <li><a href={'#'}>Item 3</a></li>
                                    <Dropdown as={'li'}>
                                        <a href={'#'} className={'dropdown-toggle'}>Dropdown</a>
                                        <ul className={'d-menu'}>
                                            <li><a href={'#'}>Item 1</a></li>
                                            <li><a href={'#'}>Item 2</a></li>
                                            <li><a href={'#'}>Item 3</a></li>
                                            <Dropdown as={'li'}>
                                                <a href={'#'} className={'dropdown-toggle'}>Dropdown</a>
                                                <ul className={'d-menu'}>
                                                    <li><a href={'#'}>Item 1</a></li>
                                                    <li><a href={'#'}>Item 2</a></li>
                                                    <li><a href={'#'}>Item 3</a></li>
                                                </ul>
                                            </Dropdown>
                                        </ul>
                                    </Dropdown>
                                </ul>
                            </Dropdown>
                        </Cell>
                        <Cell cls={'cell-md-2'}>
                            <Dropdown>
                                <button className={'button dropdown-toggle'}>Dropdown</button>
                                <ul className={'d-menu'}>
                                    <li><a href={'#'}>Item 1</a></li>
                                    <li><a href={'#'}>Item 2</a></li>
                                    <li><a href={'#'}>Item 3</a></li>
                                </ul>
                            </Dropdown>
                        </Cell>
                        <Cell cls={'cell-md-2'}>
                            <Dropdown clsDropdown={'shadow-1'}>
                                <Button cls={'dropdown-toggle alert'}>
                                    <Icon name={'rocket'}/>
                                </Button>
                                <ul className={'d-menu'}>
                                    <li><a href={'#'}>Item 1</a></li>
                                    <li><a href={'#'}>Item 2</a></li>
                                    <li><a href={'#'}>Item 3</a></li>
                                </ul>
                            </Dropdown>
                        </Cell>
                        <Cell cls={'cell-md-4'}>
                            <Dropdown cls={'place-right'} clsDropdown={'place-right'}>
                                <button className={'button dropdown-toggle'}>Dropdown</button>
                                <ul className={'d-menu'}>
                                    <li><a href={'#'}>Item 1</a></li>
                                    <li><a href={'#'}>Item 2</a></li>
                                    <li><a href={'#'}>Item 3</a></li>
                                </ul>
                            </Dropdown>
                        </Cell>
                    </Row>

                    <h2 className="text-light">&lt;Input file/&gt;</h2>
                    <Row>
                        <Cell cls={'cell-md-4'}>
                            <InputFile/>
                        </Cell>

                        <Cell cls={'cell-md-4'}>
                            <InputFile buttonIcon={'folder'} buttonTitle={''}/>
                        </Cell>

                        <Cell cls={'cell-md-4'}>
                            <InputFile buttonIcon={'folder'} buttonTitle={''} customButtons={customButtons} multiple={true}/>
                        </Cell>
                    </Row>
                    <br/>
                    <Row>
                        <Cell cls={'cell-md-12'}>
                            <InputFile mode={'drop'} multiple={true}/>
                        </Cell>
                    </Row>

                    <h2 className="text-light">&lt;Textarea/&gt;</h2>
                    <Row>
                        <Cell cls={'cell-md-4'}>
                            <Textarea/>
                        </Cell>
                    </Row>


                    <h2 className="text-light">&lt;Pagination/&gt;</h2>
                    <Row>
                        <Cell>
                            <Pagination total={100} itemsPerPage={5} current={7} onClick={this.paginationClick}/>
                        </Cell>
                    </Row>


                    <h2 className="text-light">&lt;Modal Activity/&gt;</h2>
                    <Row>
                        <Cell>
                            <div>
                                <Button onClick={this.toggleActivity}>Open activity</Button>
                            </div>
                            <ActivityModal open={this.state.activityOpen} variant={'color'} onClose={this.closeActivity}/>
                        </Cell>
                    </Row>

                    <h2 className="text-light">&lt;Dialog/&gt;</h2>
                    <Row>
                        <Cell>
                            <div>
                                <Button onClick={this.toggleDialog}>Open dialog</Button>
                            </div>
                            <Dialog open={this.state.dialogOpen}
                                    title={'This is a Metro 4 for React Dialog'}
                                    actions={dialogButtons}
                                    onClose={this.closeDialog}
                                    modal={true}
                                    overlayColor={'#000'}
                                    overlayAlpha={.5}
                                    cls={"shadow-1"}
                            >
                                <div>
                                    Bassus abactors ducunt ad triticum. A fraternal form of manifestation is the bliss.
                                </div>
                            </Dialog>
                        </Cell>
                    </Row>

                    <h2 className="text-light">&lt;Gravatar/&gt;</h2>
                    <Row>
                        <Cell>
                            <Gravatar email={'sergey@pimenov.com.ua'} size={40}/>
                            <Gravatar email={'sergey@pimenov.com.ua'}/>
                            <Gravatar email={'sergey@pimenov.com.ua'} size={120}/>
                            <Gravatar email={'sergey@pimenov.com.ua'} size={160}/>
                            <Gravatar email={'sergey@pimenov.com.ua'} size={200}/>
                        </Cell>
                    </Row>
                    <br/>
                    <Row>
                        <Cell>
                            <Gravatar email={'non'} defaultImage={'mp'}/>
                            <Gravatar email={'non'} defaultImage={'identicon'}/>
                            <Gravatar email={'non'} defaultImage={'monsterid'}/>
                            <Gravatar email={'non'} defaultImage={'wavatar'}/>
                            <Gravatar email={'non'} defaultImage={'retro'}/>
                            <Gravatar email={'non'} defaultImage={'robohash'}/>
                            <Gravatar email={'non'} defaultImage={'blank'}/>
                        </Cell>
                    </Row>

                    <h2 className="text-light">&lt;Toolbar/&gt;</h2>
                    <Row>
                        <Cell>
                            <ToolBar>
                                <ToolButton><Icon name={'rocket'}/></ToolButton>
                                <ToolButton cls={'text-button'}>Open</ToolButton>
                                <ToolButton as={'a'} href={'#'}><Icon name={'printer'}/></ToolButton>
                            </ToolBar>
                            <ToolBar>
                                <ToolButton cls={'primary'}><Icon name={'rocket'}/></ToolButton>
                                <ToolButton cls={'info text-button'}>Open</ToolButton>
                                <ToolButton cls={'alert'} as={'a'} href={'#'}><Icon name={'printer'}/></ToolButton>
                            </ToolBar>
                            <ToolBar>
                                <ToolButton cls={'primary outline'}><Icon name={'rocket'}/></ToolButton>
                                <ToolButton cls={'info text-button outline'}>Open</ToolButton>
                                <ToolButton cls={'alert outline'} as={'a'} href={'#'}><Icon name={'printer'}/></ToolButton>
                            </ToolBar>
                            <ToolBar>
                                <ToolButton cls={'primary rounded'}><Icon name={'rocket'}/></ToolButton>
                                <ToolButton cls={'info text-button rounded'}>Open</ToolButton>
                                <ToolButton cls={'alert rounded'} as={'a'} href={'#'}><Icon name={'printer'}/></ToolButton>
                            </ToolBar>
                        </Cell>
                    </Row>

                    <h2 className="text-light">&lt;Tag /&gt;</h2>
                    <Row>
                        <Cell>
                            <Tag>metro4</Tag>
                            <Tag>react</Tag>
                            <Tag>css</Tag>
                            <Tag>javascript</Tag>
                        </Cell>
                    </Row>

                    <h2 className="text-light">&lt;Icon /&gt;</h2>
                    <Row>
                        <Cell cls="cell-md-6">
                            <h5>Use Metro Icons Font</h5>
                            <Icon name="rocket"/>
                            <Icon name="rocket" cls="fg-red" size="2x"/>
                            <Icon name="rocket" cls="fg-green" size="3x"/>
                            <Icon name="rocket" cls="fg-blue" size="4x"/>
                            <Icon name="rocket" cls="fg-orange" size="5x"/>
                        </Cell>
                        <Cell cls="cell-md-6">
                            <h5>Use Font Awesome</h5>
                            <Icon name="rocket" prefix="fas fa-"/>
                            <Icon name="rocket" prefix="fas fa-" cls="fg-red" size="2x"/>
                            <Icon name="rocket" prefix="fas fa-" cls="fg-green" size="3x"/>
                            <Icon name="rocket" prefix="fas fa-" cls="fg-blue" size="4x"/>
                            <Icon name="rocket" prefix="fas fa-" cls="fg-orange" size="5x"/>
                        </Cell>
                    </Row>

                    <h2 className="text-light">&lt;Activity /&gt;</h2>
                    <Row>
                        <Cell cls="cell-md-4 bg-darkGray p-2">
                            <Activity type="ring" variant="light" cls="mx-auto"/>
                        </Cell>
                        <Cell cls="cell-md-4 p-2">
                            <Activity type="ring" variant="dark" cls="mx-auto"/>
                        </Cell>
                        <Cell cls="cell-md-4 p-2">
                            <Activity type="ring" variant="color" cls="mx-auto"/>
                        </Cell>
                    </Row>

                    <Row>
                        <Cell cls="cell-md-4 bg-darkGray p-2">
                            <Activity type="metro" variant="light" cls="mx-auto"/>
                        </Cell>
                        <Cell cls="cell-md-4 p-2">
                            <Activity type="metro" variant="dark" cls="mx-auto"/>
                        </Cell>
                        <Cell cls="cell-md-4 p-2">
                            <Activity type="metro" variant="color" cls="mx-auto"/>
                        </Cell>
                    </Row>

                    <Row>
                        <Cell cls="cell-md-4 bg-darkGray p-2">
                            <Activity type="square" variant="light" cls="mx-auto"/>
                        </Cell>
                        <Cell cls="cell-md-4 p-2">
                            <Activity type="square" variant="dark" cls="mx-auto"/>
                        </Cell>
                        <Cell cls="cell-md-4 p-2">
                            <Activity type="square" variant="color" cls="mx-auto"/>
                        </Cell>
                    </Row>

                    <Row>
                        <Cell cls="cell-md-4 bg-darkGray p-2">
                            <Activity type="cycle" variant="light" cls="mx-auto"/>
                        </Cell>
                        <Cell cls="cell-md-4 p-2">
                            <Activity type="cycle" variant="dark" cls="mx-auto"/>
                        </Cell>
                        <Cell cls="cell-md-4 p-2">
                            <Activity type="cycle" variant="color" cls="mx-auto"/>
                        </Cell>
                    </Row>

                    <Row>
                        <Cell cls="cell-md-4 bg-darkGray p-2">
                            <Activity type="simple" variant="light" cls="mx-auto"/>
                        </Cell>
                        <Cell cls="cell-md-4 p-2">
                            <Activity type="simple" variant="dark" cls="mx-auto"/>
                        </Cell>
                        <Cell cls="cell-md-4 p-2">
                            <Activity type="simple" variant="color" cls="mx-auto"/>
                        </Cell>
                    </Row>

                    <h2 className="text-light">&lt;Accordion /&gt;</h2>
                    <Row>
                        <Cell cls="w-100">
                            <Accordion oneFrame={true} oneFrameOpen={false} clsFrameContent="p-4" onFrameBeforeClose={()=>true}>
                                <AccordionFrame title="Head 1" open>
                                    Season eight tablespoons of blueberries in four pounds of fish sauce.
                                    Season eight tablespoons of blueberries in four pounds of fish sauce.
                                    Season eight tablespoons of blueberries in four pounds of fish sauce.
                                </AccordionFrame>
                                <AccordionFrame title="Head 2">
                                    Dogma is the only samadhi, the only guarantee of fear.
                                    Dogma is the only samadhi, the only guarantee of fear.
                                    Dogma is the only samadhi, the only guarantee of fear.
                                </AccordionFrame>
                                <AccordionFrame title="Head 3">
                                    None of these coordinates will be lost in voyages like devastations in mysteries
                                    None of these coordinates will be lost in voyages like devastations in mysteries
                                    None of these coordinates will be lost in voyages like devastations in mysteries

                                    <h2>Nested accordion</h2>
                                    <Accordion variant={2} oneFrame={true} clsFrameContent="p-4">
                                        <AccordionFrame title="Head 1" open>
                                            Season eight tablespoons of blueberries in four pounds of fish sauce.
                                            Season eight tablespoons of blueberries in four pounds of fish sauce.
                                            Season eight tablespoons of blueberries in four pounds of fish sauce.
                                        </AccordionFrame>
                                        <AccordionFrame title="Head 2">
                                            Dogma is the only samadhi, the only guarantee of fear.
                                            Dogma is the only samadhi, the only guarantee of fear.
                                            Dogma is the only samadhi, the only guarantee of fear.
                                        </AccordionFrame>
                                        <AccordionFrame title="Head 3">
                                            None of these coordinates will be lost in voyages like devastations in mysteries
                                            None of these coordinates will be lost in voyages like devastations in mysteries
                                            None of these coordinates will be lost in voyages like devastations in mysteries
                                        </AccordionFrame>
                                    </Accordion>

                                </AccordionFrame>
                            </Accordion>
                        </Cell>
                    </Row>

                    <h2 className="text-light">&lt;BottomNav /&gt;</h2>
                    <Row>
                        <Cell cls="cell-md-4 bg-light" style={{height: 300}}>
                            <BottomNav cls="pos-absolute">
                                <BottomNavItem label="Button1" icon="rocket"/>
                                <BottomNavItem label="Button2" icon="apps"/>
                                <BottomNavItem label="Button3" icon="windows"/>
                            </BottomNav>
                        </Cell>
                        <Cell cls="cell-md-4"/>
                        <Cell cls="cell-md-4"/>
                    </Row>

                    <h2>&lt;Button/&gt;</h2>
                    <Row>
                        <Cell>
                            <Button title='Button'/>
                            &nbsp;<Button cls="alert" title='Button'/>
                            &nbsp;<Button cls="info" title='Button' icon="rocket"/>
                            &nbsp;<Button cls="warning" icon="bell"/>
                            &nbsp;<Button as="a" cls="secondary" title="Link as Button" href="#"/>
                            &nbsp;<Button as="span" cls="primary" title="Span as Button"/>
                            &nbsp;<Button title="Flat Button" isFlat={true}/>
                            &nbsp;<Button icon="envelop"><Badge cls="alert" value={10}/></Button>
                        </Cell>
                    </Row>

                    <h2>&lt;CommandButton/&gt;</h2>
                    <Row>
                        <Cell>
                            <CommandButton icon="share" title="Yes, share and connect" subtitle="Use this option for home or work"/>
                            &nbsp;<CommandButton icon="share" title="Yes, share and connect" subtitle="Use this option for home or work" cls="icon-right info"/>
                            &nbsp;<CommandButton as="a" icon="share" title="Yes, share and connect" subtitle="Use this option for home or work" cls="icon-right info"/>
                        </Cell>
                    </Row>

                    <h2>&lt;ImageButton/&gt;</h2>
                    <Row>
                        <Cell>
                            <ImageButton icon="share" title="Share your connect"/>
                            &nbsp;<ImageButton icon="share" title="Share your connect" cls="icon-right info"/>
                            &nbsp;<ImageButton as="a" icon="share" title="Share your connect" />
                            &nbsp;<ImageButton as="a" icon="share" title="Share your connect" cls="icon-right"/>
                        </Cell>
                    </Row>

                    <h2>&lt;Shortcut/&gt;</h2>
                    <Row>
                        <Cell>
                            <Shortcut icon="rocket" title="Rocket"/>
                            &nbsp;<Shortcut icon="share" title="Share" cls="info"/>
                            &nbsp;<Shortcut icon="share" cls="warning no-caption"/>
                            &nbsp;<Shortcut icon="windows" cls="alert" title="Windows" tag={10}/>
                            &nbsp;<Shortcut as="a" href="#" icon="windows" cls="success" title="Anchor" badge={10}/>
                        </Cell>
                    </Row>

                    <h2>&lt;Breadcrumbs/&gt;</h2>
                    <Row>
                        <Cell>
                            <Breadcrumbs cls="mt-0">
                                <BreadcrumbsItem>Home</BreadcrumbsItem>
                                <BreadcrumbsItem>Products</BreadcrumbsItem>
                                <BreadcrumbsItem>Download</BreadcrumbsItem>
                                <BreadcrumbsItem cls="fg-red">Windows 10</BreadcrumbsItem>
                            </Breadcrumbs>
                        </Cell>
                    </Row>

                    <h2>&lt;InfoButton/&gt;</h2>
                    <Row>
                        <Cell>
                            <InfoButton title="Star" subtitle="6,208" icon="star-full" />
                            &nbsp;<InfoButton title="Star" subtitle="6,208" icon="star-full" cls="alert" />
                            &nbsp;<InfoButton title="Star" subtitle="6,208" icon="star-full" cls="info rounded" />
                            &nbsp;<InfoButton as="a" title="This is a link" subtitle="6,208" icon="star-full" cls="warning rounded" href="https://metroui.org.ua"/>
                        </Cell>
                    </Row>

                    <h2>&lt;ActionButton/&gt;</h2>
                    <Row>
                        <Cell>
                            <ActionButton icon="star-full" />
                            &nbsp;<ActionButton icon="star-full" cls="second" />
                            &nbsp;<ActionButton icon="star-full" cls="info"/>
                            &nbsp;<ActionButton icon="star-full" cls="warning second" />
                            &nbsp;<ActionButton icon="star-full" cls="alert" />
                        </Cell>
                    </Row>

                    <h2>&lt;MultiAction/&gt;</h2>
                    <Row>
                        <Cell>
                            <MultiAction icon="star-full" cls="alert" drop={'right'}>
                                <MultiActionItem icon="rocket" onClick={() => alert('rocket')}/>
                            </MultiAction>
                        </Cell>
                    </Row>


                </Grid>
            </Container>
        )
    }
}