export default function QRCard({ data }) {
  return (
    <div className="rounded-md shadow-lg shadow-black w-full mx-auto bg-slate-700 p-3 flex cursor-pointer hover:scale-95 ease-linear duration-100">
      {/* QR Thumbnail */}
      <div>
        <img
          src={`data:image/gif;base64,R0lGODlhyADIAIAAAAAAAP///ywAAAAAyADIAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE6r1+y2+w2Py+f0uv2Oz+v3/D4PABgoOEhYaEgIgZhwGKjA+Ah56BRJWZk46PiYWckp2dQJWngpuOmJEIra+JmKOqp6qrnIGjo5C+oKWGqoaxtZ22v5oAjLyAtcvEoaMtxwK4y5DM3E7EG94OxgzaF9xK3hfYDdLP0BTmR+gS7OgG7RHvROod6JCyAS/4MvMc9Zf0+uxNq6AAJjETMVDiBBerKUTVM4sCCyg7savkrYz2KuZP8XDUSEaBAjQo8gM1K0x3HjSUi8jJUcudChSEotU6JcGZKkTJ0wWWq8OdPXz18dYwY76XKn0YpIf/ps+lDpR6U1oY6TytBqwJc0hz7DStUrzolBiaoM+rTs16L82GZVG9WtSbhX5RatijbnUqBbwR6ly44r32uC0/I829duV62E/SJurFgoYyQS/x4e7E8s4L2G95odPPXu2seVSb+9/DlpT4WZGZeWvJlyYb36PGtG7ZQ2626zyeKWJxjv5c61//ReHTZb8NucdScvUnw05g2v/z0/t/tb9gzVo10fEl35d3fLQYTPcT7w+ArdzW/Hvh54/Anty70Hf5/8/H3l7e//73GMZba5dlyA/xlnoHORCddcggfu4KCCpjkGWoQwyWahKMzVN1yG0xnhoYYEUqhahJ+FyCCHDVroB3F6+eGCi77BGKOEItL4gowX4qiCjkzx2IKPN+oRWog/dvhfevjNhaSRE+4onmhSFOlkgR/W9RgVVFYZWW1KCrEllxXO2NoVYXJZ4pXqSWmmjW0tRt9pkB35hJBvwsYfk3MOWaeb9w1UT2dpaunnd4BKJ2huDwJh559yBvqiomwmRmeiY0GJJZ57flmDip721+STJtqUIqgDbtZogKltaOqnM6JIKqskytqllbasOuKCtIrKJ6xx8VrqrLlW6qEWnF5K5zaO/y66xLF5kUndspNW4WyofCpraH5TVLtistFmyyylaqbz6LfTcgumtvIJiO256kIX6bC9SksstF5YiqqNkFKILm/25vsqvfP+ywW+vz2ra5T1YlpwvAAj527ABG9h8KnWMjiopFkCWebFzOnHcB6vqQiyt3yMbGrJ1/aBsrDcOUyklRizB7PIMn9M88QYVhlsyBkjuzKIYvZscqYt+wzP0LsGbbSt7/og5pi1Jlko0owqLa+XVRcNH89Lay0xu/5Oq/LPCG88Wc5kJx3unmZ7rPC4HSfB7dG83tku2vC2TfTAISvZb418f31z3HnLzfba695deKaH43q238BK93gZdv9LLrXeB2MQ+N5TQzy54eZqTrHTLm/u9uiIY3G5qxEr7rjlpiccG86Lr94mv/oiWvOZsHfNeNikHwr05YTqLvy4xEdu/Lazh970xL6TvnPwoCtfbvGNQ9F6yhozbW3zUz6fefl9n7805OG3yv7pFr/fOQvdu+869KiTPLb1C9sPf/u0o1698gkJffIiYO2EhrzrGfB+/uNfAK3zv9RpB1y/W1IF54Y31c1NfR3AX9put8FYucd9MwMh5Zw3uAKecIKvo17+cJenCJYwThR0IQK9lrXePa1bMAQQ1h4GpzXZMHInKhbhpLfDiqULTUf8WxJrtkQcAlFTMxQi+CzopL5KVQxsVuOYF78IxjCKcYxkLKMZz4jGNKpxjWxsoxvfCMc4ynGOdKyjHe+IxzzqcY987KMf/wjIQApykIQspCEPichEKnKRjJxjAQAAOw==`}
          className="w-12 rounded-lg"
        />
      </div>

      {/* Title */}
      <div className="grow flex items-center ml-2">{data.title}</div>
    </div>
  )
}
