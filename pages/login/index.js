import Link from "next/link";

const Login = () => {
  return (
    <>
      <div class=" bg-green-100 py-14">
        <div class="max-w-lg mx-auto py-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 class="text-4xl font-medium">Please Login!!</h1>
          <p class="text-slate-500">Hi, Welcome back</p>

          <div class="my-5">
            <button class="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-0 text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                class="w-6 h-6"
                alt=""
              />{" "}
              <span>Login with Google</span>
            </button>
          </div>
          <form class="my-10">
            <div class="flex flex-col space-y-5">
              <label for="email">
                <p class="font-medium text-slate-700 pb-2">Email address</p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="w-full py-3 border border-slate-200 rounded-0 px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter email address"
                />
              </label>
              <label for="password">
                <p class="font-medium text-slate-700 pb-2">Password</p>
                <input
                  id="password"
                  name="password"
                  type="password"
                  class="w-full py-3 border border-slate-200 rounded-0 px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter your password"
                />
              </label>
              <div class="flex flex-row justify-between">
                <div>
                  <label for="remember" class="">
                    <input
                      type="checkbox"
                      id="remember"
                      class="w-4 h-4 border-slate-200 focus:bg-indigo-600"
                    />
                    Remember me
                  </label>
                </div>
                <div>
                  <Link href="/" class="font-medium text-indigo-600">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <button class="w-full py-3 font-medium text-white bg-secondary hover:bg-green-700 duration-500 rounded-0 border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Login</span>
              </button>
              <p class="text-center">
                Not registered yet?{" "}
                <a
                  href="#"
                  class="text-primary font-medium inline-flex space-x-1 items-center"
                >
                  <span>Register now </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
