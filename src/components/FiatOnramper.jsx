export default function FiatOnramper() {
  return (
    <div style="display: flex; justify-content: center; padding: 15px;">
      <iframe
        style="--border-radius: 10px; box-shadow: 0 2px 10px 0 rgba(0,0,0,.20); border-radius: var(--border-radius); margin: auto;max-width: 420px"
        src="https://widget.onramper.com?color=266677&apiKey=pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0"
        height="660px"
        width="482px"
        title="Onramper widget"
        frameborder="0"
        allow="accelerometer; autoplay; camera; gyroscope; payment"
      ></iframe>
    </div>
  );
}
