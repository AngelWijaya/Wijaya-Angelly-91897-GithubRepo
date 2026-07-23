interface BaseCardProps {
    bgColor: string;
    label: string;
    icon: React.ReactNode;
    height: number;
    width: number;
    children: React.E
}

const BaseCard = (props: BaseCardProps) => {
    return <></>
}




const TodoList = () => {
    return <BaseCard icon='' label=""></BaseCard>
}

const Notes = () => {
    <BaseCard icon='' label=""></BaseCard>
}