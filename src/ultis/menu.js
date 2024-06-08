import icon from "./icon"

const { MdOutlineLibraryMusic,
    AiFillAlipaySquare,
    AiFillBank,
    AiFillCamera } = icon

export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'cá nhân',
        end: true,
        icon: <MdOutlineLibraryMusic size={24}/>
    },
    {
        path: '',
        text: 'khám phá',
        icon: <AiFillAlipaySquare size={24}/>
    },
    {
        path: 'zing_chart',
        text: '#zingchart',
        end: true,
        icon: <AiFillBank size={24}/>
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        end: true,
        icon: <AiFillCamera size={24}/>
    }

]