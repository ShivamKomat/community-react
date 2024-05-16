import React from 'react'
import { tw } from 'twind';

const TournamentPage = () => {
  return (
    
    <div className={tw`container w-[1200px] border-2 rounded-2xl mx-auto my-8 shadow-sm min-h-[100vh]`}>
    <div className={tw`grid md:grid-cols-2 gap-8 items-start`}>
      <div className={tw`space-y-4 p-4`}>
        <div className={tw`space-y-2`}>
          <h1 className={tw`text-3xl font-bold`}>Gaming Tournaments</h1>
          <p className={tw`text-gray-500 dark:text-gray-400`}>
            Organize and participate in gaming tournaments, leagues, and competitive events.
          </p>
        </div>

  <div className={tw`space-y-4`}>
    <div className={tw`flex items-center space-x-4`}>
      <div className={tw`flex flex-col text-center`}>
        <span className={tw`text-2xl font-semibold`}>23</span>
        <span className={tw`text-sm text-gray-500 dark:text-gray-400`}>
          Tournament Brackets
        </span>
      </div>
      <div className={tw`flex flex-col text-center`}>
        <span className={tw`text-2xl font-semibold`}>45</span>
        <span className={tw`text-sm text-gray-500 dark:text-gray-400`}>
          Active Leagues
        </span>
      </div>
      <div className={tw`flex flex-col text-center`}>
        <span className={tw`text-2xl font-semibold`}>98</span>
        <span className={tw`text-sm text-gray-500 dark:text-gray-400`}>
          Matches Played
        </span>
      </div>
    </div>
    <div className={tw`space-y-4`}>
      {/* Tournament 1 */}
      <div className={tw`rounded-lg border bg-card text-card-foreground shadow-sm`} data-v0-t="card">
        <div className={tw`p-4 space-y-4`}>
          <div className={tw`flex items-center space-x-4`}>
            <img
              src="/Images/img1.jpg"
              width="40"
              height="40"
              alt="Avatar"
              className={tw`rounded-full`}
              // style={tw`aspect-ratio: 40 / 40; object-fit: cover`}
            />
            <div className={tw`space-y-1`}>
              <h3 className={tw`text-lg font-bold`}>Tournament 1</h3>
              <p className={tw`text-sm text-gray-500 dark:text-gray-400`}>
                Join the tournament and compete!
              </p>
            </div>
          </div>
          <div className={tw`border-t border-gray-200 dark:border-gray-800`}></div>
          <div className={tw`grid grid-cols-2 gap-4`}>
            <div className={tw`space-y-2`}>
              <h4 className={tw`text-base font-semibold`}>Participants</h4>
              <ul className={tw`grid grid-cols-2 gap-2 text-sm`}>
                <li>Lucy</li>
                <li>Mike</li>
                <li>Jane</li>
                <li>Tom</li>
              </ul>
            </div>
            <div className={tw`space-y-2`}>
              <h4 className={tw`text-base font-semibold`}>Prizes</h4>
              <ul className={tw`text-sm`}>
                <li>1st Place: $500</li>
                <li>2nd Place: $250</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* League 1 */}
      <div className={tw`rounded-lg border bg-card text-card-foreground shadow-sm`} data-v0-t="card">
        <div className={tw`p-4 space-y-4`}>
          <div className={tw`flex items-center space-x-4`}>
            <img
              src="/Images/img10.jpg"
              width="40"
              height="40"
              alt="Avatar"
              className={tw`rounded-full`}
              // style={tw`aspect-ratio: 40 / 40; object-fit: cover`}
            />
            <div className={tw`space-y-1`}>
              <h3 className={tw`text-lg font-bold`}>League 1</h3>
              <p className={tw`text-sm text-gray-500 dark:text-gray-400`}>
                Compete in the league and climb the ranks!
              </p>
            </div>
          </div>
          <div className={tw`border-t border-gray-200 dark:border-gray-800`}></div>
          <div className={tw`grid grid-cols-2 gap-4`}>
            <div className={tw`space-y-2`}>
              <h4 className={tw`text-base font-semibold`}>Teams</h4>
              <ul className={tw`grid grid-cols-2 gap-2 text-sm`}>
                <li>Team A</li>
                <li>Team B</li>
                <li>Team C</li>
                <li>Team D</li>
              </ul>
            </div>
            <div className={tw`space-y-2`}>
              <h4 className={tw`text-base font-semibold`}>Standings</h4>
              <ul className={tw`text-sm`}>
                <li>1st: Team A</li>
                <li>2nd: Team B</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
<div class={tw`space-y-4`}>
  <div className={tw`rounded-lg border bg-card text-card-foreground shadow-sm`}>
    <div className={tw`p-4 space-y-4`}>
      <div className={tw`space-y-2`}>
        <div className={tw`flex items-center space-x-2`}>
          <h1 className={tw`text-2xl font-bold`}>Tournament 1</h1>
          <div className={tw`text-sm font-medium bg-white text-black hover:bg-slate-700 hover:text-white rounded-md px-2 py-1 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300`}>
            4 new matches
          </div>
        </div>
        <p className={tw`text-sm text-gray-500 dark:text-gray-400`}>
          Join the tournament and show your skills!
        </p>
      </div>
      <div className={tw`grid grid-cols-3 gap-4`}>
        <div className={tw`flex flex-col gap-1`}>
          <div className={tw`text-sm font-semibold`}>Lucy</div>
          <div>Ready to play!</div>
        </div>
        <div className={tw`flex flex-col gap-1`}>
          <div className={tw`text-sm font-semibold`}>Mike</div>
          <div>Let's do this!</div>
        </div>
        <div className={tw`flex flex-col gap-1`}>
          <div className={tw`text-sm font-semibold`}>Emily</div>
          <div>Game on!</div>
        </div>
      </div>
    </div>
    <div className={tw`flex items-center p-6`}>
      <div className={tw`flex gap-4`}>
        <button className={tw`text-sm font-medium bg-white text-black hover:bg-slate-700 hover:text-white h-9 rounded-md px-3 transition-colors`}>
          Join
        </button>
        <button className={tw`text-sm font-medium bg-white text-black hover:bg-slate-700 hover:text-white h-9 rounded-md px-3 transition-colors`}>
          Details
        </button>
      </div>
    </div>
  </div>

  <div className={tw`rounded-lg border bg-card text-card-foreground shadow-sm`}>
    <div className={tw`p-4 space-y-4`}>
      <div className={tw`space-y-2`}>
        <div className={tw`flex items-center space-x-2`}>
          <h1 className={tw`text-2xl font-bold`}>League 1</h1>
          <div className={tw`text-sm font-medium bg-white text-black hover:bg-slate-700 hover:text-white rounded-md px-2 py-1 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300`}>
            1 new match
          </div>
        </div>
        <p className={tw`text-sm text-gray-500 dark:text-gray-400`}>
          Get ready for the next league match!
        </p>
      </div>
      <div className={tw`grid grid-cols-3 gap-4`}>
        <div className={tw`flex flex-col gap-1`}>
          <div className={tw`text-sm font-semibold`}>Lucy</div>
          <div>Excited to play!</div>
        </div>
        <div className={tw`flex flex-col gap-1`}>
          <div className={tw`text-sm font-semibold`}>Mike</div>
          <div>Let's win this!</div>
        </div>
        <div className={tw`flex flex-col gap-1`}>
          <div className={tw`text-sm font-semibold`}>Emily</div>
          <div>Ready for action!</div>
        </div>
      </div>
    </div>
    <div className={tw`flex items-center p-6`}>
      <div className={tw`flex gap-4`}>
        <button className={tw`text-sm font-medium bg-white text-black hover:bg-slate-700 hover:text-white h-9 rounded-md px-3 transition-colors`}>
          Join
        </button>
        <button className={tw`text-sm font-medium bg-white text-black hover:bg-slate-700 hover:text-white h-9 rounded-md px-3 transition-colors`}>
          Details
        </button>
      </div>
    </div>
  </div>
  <div className={tw`flex flex-col gap-4`}>
    <div className={tw`grid grid-cols-3 gap-4`}>
      <div className={tw`flex flex-col gap-1`}>
        <div className={tw`text-sm font-semibold`}>Lucy</div>
        <div>Let's play!</div>
      </div>
      <div className={tw`flex flex-col gap-1`}>
        <div className={tw`text-sm font-semibold`}>Mike</div>
        <div>Game time!</div>
      </div>
      <div className={tw`flex flex-col gap-1`}>
        <div className={tw`text-sm font-semibold`}>Emily</div>
        <div>Ready to compete!</div>
      </div>
    </div>
    <div className={tw`grid grid-cols-3 gap-4`}>
      <div className={tw`flex flex-col gap-1`}>
        <div className={tw`text-sm font-semibold`}>Lucy</div>
        <div>Let's win!</div>
      </div>
      <div className={tw`flex flex-col gap-1`}>
        <div className={tw`text-sm font-semibold`}>Mike</div>
        <div>Game on!</div>
      </div>
      <div className={tw`flex flex-col gap-1`}></div>
    </div>
  </div>
  <form className={tw`flex items-center space-x-4 mx-2`}>
    <textarea
      className={tw`flex rounded-md border border-input text-black px-3 py-2 text-sm max-h-[100px] w-full min-h-[40px] sm:min-h-[60px] outline-none`}
      placeholder="Type your message..."
    ></textarea>
    <button
      className={tw`text-sm font-medium bg-white text-black hover:bg-slate-700 hover:text-white h-9 rounded-md px-3 transition-colors`}
      type="submit"
    >
      Send
    </button>
  </form>
</div>
</div>
</div>
  )
}

export default TournamentPage;