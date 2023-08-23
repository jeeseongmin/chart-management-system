import Counter from "../test/Counter";
import { render, screen } from "@testing-library/react";

const CounterProps = {
  count: 0,
  onIncrease: jest.fn(),
  onDecrease: jest.fn(),
}

describe("<Counter />", () => {
  test("화면에 'Counter'라는 텍스트가 보이는지 테스트", () => {
    render(<Counter {...CounterProps} />);
    
    const text = screen.getByText("Counter");
    expect(text).toBeInTheDocument();
  })
  
  test("증가 버튼을 클릭했을 때 onIncrease 함수가 실행되는지 테스트", () => {
    render(<Counter {...CounterProps} />);
    
    const button = screen.getByRole("button", {name: "증가"});
    button.click();
    expect(CounterProps.onIncrease).toHaveBeenCalled();
  })
  
  test("감소 버튼을 클릭했을 때 onDecrease 함수가 실행되는지 테스트", () => {
    render(<Counter {...CounterProps} />);
    
    const button = screen.getByRole("button", {name: "감소"});
    button.click();
    expect(CounterProps.onDecrease).toHaveBeenCalled();
  })
})