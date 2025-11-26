import "../../../styles/blog.css";
import { blogPostData } from "./data";

const BlogPost2Content = () => {
  return (
    <div
      className="container blog-post-container"
      style={{ marginTop: "10rem" }}
    >
      <h1>{blogPostData.title}</h1>
      <div className="blog-post-header">
        <p>{blogPostData.date}</p>
        <p>{blogPostData.readingTime}</p>
      </div>

      <p>
        When reporting a bug, sharing a code snippet, or asking for help, a{" "}
        <strong>reprex</strong> — a reproducible example — can make the
        difference between confusion and clarity. A good reprex is minimal,
        self-contained, and ensures that anyone else can reproduce the behavior
        on their machine. In Python projects this often means documenting
        dependencies, Python version, environment setup, and the exact code and
        external state needed. Without that context a maintainer or collaborator
        may struggle to debug or reproduce your issue.
      </p>
      <p>
        Here we’ll show how uv — a fast, modern Python tool from Astral — can
        simplify creating fully reproducible reprexes. uv lets you wrap your
        script, its dependencies, and metadata all in one file, producing a
        reproducible environment on demand.{" "}
      </p>

      <h2>Why Reprexes Matter</h2>
      <ul>
        <li>
          <strong>Reproducibility</strong>: Anyone can run the same code, with
          the same dependencies and Python version, and see the same result.
        </li>
        <li>
          <strong>Debuggability</strong>: Maintainers or collaborators don’t
          have to guess which libraries, versions, or environment settings you
          used — everything is explicit.
        </li>
        <li>
          <strong>Portability</strong>: You can share a single script, and the
          recipient doesn’t need to manually set up a virtual environment or
          install dependencies; uv handles it.
        </li>
        <li>
          <strong>Minimal overhead</strong>: Rather than sending full project
          folders or long instructions, a compact script with metadata can do
          the job.
        </li>
      </ul>

      <h2>Introducing uv</h2>
      <p>
        uv is a unified Python toolchain written in Rust. It can replace tools
        like <code>pip</code>, <code>virtualenv</code>, <code>pyenv</code>, and
        more — combining package installation, environment management, Python
        version management, and script execution in a single, fast CLI.{" "}
      </p>
      <p>
        One of uv’s strengths is its support for single-file scripts using
        inline metadata (following Python’s standard for script metadata). This
        makes uv particularly well-suited to crafting self-contained,
        reproducible scripts — which is exactly what you want for a reliable
        reprex.{" "}
      </p>

      <h2>How to Write Reprexes with uv</h2>
      <p>
        Here is a step-by-step guide to writing a reproducible example in Python
        using uv.
      </p>
      <ol>
        <li>
          <strong>Install uv</strong>
          <br />
          On macOS or Linux:
          <br />
          <code>curl -LsSf https://astral.sh/uv/install.sh | sh</code>
          <br />
          On Windows, using PowerShell:
          <br />
          <code>irm https://astral.sh/uv/install.ps1 | iex</code>
          <br />
          Once installed, you’re ready to use uv.
        </li>
        <li>
          <strong>Create your script and declare metadata</strong>
          <br />
          At the top of your Python file, add a metadata block following
          PEP-style conventions. For example:
          <br />
          <pre>
            <code>
              # /// script # requires-python = "{">"}=3.12" # dependencies = [ #
              "requests", # "rich", # ] # /// import requests from rich.pretty
              import pprint resp = requests.get("https://example.com") data =
              resp.json() pprint(data)
            </code>
          </pre>
          This declares the dependencies and the minimum Python version. uv will
          automatically detect these when running.
        </li>
        <li>
          <strong>Run your script with uv</strong>
          <br />
          Instead of <code>python script.py</code>, use:
          <br />
          <code>uv run script.py</code>
          <br />
          uv will create an isolated virtual environment if needed, install the
          declared dependencies, and run the script. This ensures the
          environment is consistent where-ever it runs.
        </li>
        <li>
          <strong>Lock dependencies for reproducibility</strong>
          <br />
          To ensure that future runs use exactly the same package versions,
          generate a lock file:
          <br />
          <code>uv lock --script script.py</code>
          <br />
          This creates e.g. <code>script.py.lock</code>. Subsequent runs (and
          reproductions by others) will use the versions fixed in the lock file.
        </li>
        <li>
          <strong>
            Optional: restrict to packages released before a given date
          </strong>
          <br />
          To avoid future releases changing behavior, you can add an{" "}
          <code>exclude-newer</code> field in the script metadata under a{" "}
          <code>[tool.uv]</code> section. That tells uv to only consider package
          releases published before the given timestamp. That helps guarantee
          that the script remains reproducible in the long run.
        </li>
        <li>
          <strong>Pin Python version or let uv manage it</strong>
          <br />
          uv can use a specific Python version for your script. If the version
          isn’t installed locally, uv will download it automatically. You can
          request a version with e.g.:
          <br />
          <code>uv run --python 3.10 script.py</code>
          <br />
          That makes sure the Python interpreter environment is consistent.
        </li>
        <li>
          <strong>Make the script executable (optional)</strong>
          <br />
          If you prefer, you can turn the script into a standalone executable by
          adding a shebang that invokes uv. For example:
          <br />
          <pre>
            <code>
              #!/usr/bin/env -S uv run --script # /// script # dependencies =
              ["httpx"] # /// import httpx
              print(httpx.get("https://example.com"))
            </code>
          </pre>
          Then make the file executable. Running it will automatically set up
          the right environment.
        </li>
      </ol>

      <h2>Putting It All Together: A Minimal Example</h2>
      <p>
        Here is a minimal reproducible example script you could share or
        publish:
      </p>
      <pre>
        <code>
          # /// script # requires-python = "{">"}=3.12" # dependencies =
          ["requests"] # [tool.uv] # exclude-newer = "2025-11-26T00:00:00Z" #
          /// import requests resp = requests.get("https://httpbin.org/get")
          print(resp.json())
        </code>
      </pre>
      <p>
        Someone else reading your bug report or request only needs uv installed.
        They run:
      </p>
      <pre>
        <code>uv run your_script.py</code>
      </pre>
      <p>
        uv will ensure the exact dependencies (and Python version) are used,
        giving the same result you saw — even years later — assuming external
        service behavior remains the same.
      </p>
    </div>
  );
};

export const metadata = {
  title: blogPostData.title,
  description: blogPostData.description,
};

export default BlogPost2Content;
