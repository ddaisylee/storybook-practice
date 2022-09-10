// 스토리를 만들 컴포넌트를 불러옵니다.
import Title from './Title';

// 문서화하는 컴포넌트에 대한 정보를 스토리북에게 알려주기 위해 export default합니다.
export default {
  // 컴포넌트를 참조하는 방법
  title: "Practice/Title",
  // 참조하는 해당 컴포넌트
  component: Title,
  // 컴포넌트가 전달받는 argument의 종류와 타입
  argTypes: {
    title: { control: "text" },
    textColor: { control: "text" }
  }
}

// 템플릿을 생성해줍니다.
const Template = (args) => <Title {...args} />

// 스토리를 하나 만듭니다. 이를 위해 템플릿과 bind한 다음 args를 전달해줍니다.
// Function.prototype.bind(): 함수의 복사본을 만드는 메서드 -> 컴포넌트 또한 함수이기 때문에 bind로 생성
export const RedTitle = Template.bind({});

// 만든 스토리에 args를 전달합니다.
RedTitle.args = {
  title: "Red Title",
  textColor: "red"
}

// 비교를 위해 다른 스토리를 하나 더 만들어주었습니다.
export const BlueTitle = Template.bind({});

// 마찬가지로 생성한 스토리에 args를 전달합니다.
BlueTitle.args = {
  title: "Blue Title",
  textColor: "blue"
}

// bind -> args 전달 과정이 번거롭다면 템플릿을 활용하지 않고 스토리에 직접 args를 전달할 수도 있습니다.
// storybook에서 직접 args의 값을 변경하면서 컴포넌트의 변화를 확인할 수 있습니다.
export const StorybookTitle = (args) => {
  return <Title {...args} />
}