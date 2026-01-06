import React, { useState } from 'react';
import { useAdmin } from '@/lib/admin-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MoradoLogo } from '@/components/ui/morado-logo';
import { Shield, Save, Edit, LogOut, Key, Plus, Trash2, CheckCircle, AlertTriangle, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Owner() {
  const { 
    isAuthenticated, login, logout, 
    tiers, updateTiers, 
    proxyTiers, updateProxyTiers, 
    serverDevTiers, updateServerDevTiers,
    faqs, updateFaqs,
    updateCredentials, resetCredentials
  } = useAdmin();

  const [idInput, setIdInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('plans');
  const navigate = useNavigate();

  // Forgot Password State
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [recoveryKey, setRecoveryKey] = useState('');
  const [newRecId, setNewRecId] = useState('');
  const [newRecPass, setNewRecPass] = useState('');
  const [recoveryMsg, setRecoveryMsg] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(idInput.trim(), passInput.trim())) {
      setError('');
    } else {
      setError('Invalid ID or Password');
    }
  };

  const handleRecovery = (e: React.FormEvent) => {
      e.preventDefault();
      if (resetCredentials(recoveryKey.trim(), newRecId.trim(), newRecPass.trim())) {
          setRecoveryMsg('Success! Credentials updated.');
          setTimeout(() => {
              setIsForgotPassword(false);
              setRecoveryMsg('');
              setRecoveryKey('');
              setNewRecId('');
              setNewRecPass('');
          }, 1500);
      } else {
          setRecoveryMsg('Invalid Recovery Key.');
      }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(120,58,237,0.15)_0%,_transparent_70%)]" />
        
        <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 relative z-10 shadow-2xl">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
               <MoradoLogo className="w-12 h-12" />
            </div>
            <CardTitle className="text-2xl text-white">Admin Access</CardTitle>
            <CardDescription>{isForgotPassword ? 'Reset your credentials' : 'Authenticate to manage website'}</CardDescription>
          </CardHeader>
          <CardContent>
            {!isForgotPassword ? (
                <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Login ID</label>
                    <input 
                    type="text" 
                    value={idInput}
                    onChange={(e) => setIdInput(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-md p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Enter ID"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Password</label>
                    <input 
                    type="password" 
                    value={passInput}
                    onChange={(e) => setPassInput(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-md p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Enter Password"
                    />
                </div>
                
                {error && <p className="text-red-500 text-sm">{error}</p>}
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-2">
                    Secure Login
                </Button>
                
                <div className="text-center pt-4">
                    <button 
                        type="button" 
                        onClick={() => setIsForgotPassword(true)}
                        className="text-xs text-zinc-500 hover:text-zinc-300 underline"
                    >
                        Forgot login id or password?
                    </button>
                </div>
                </form>
            ) : (
                <form onSubmit={handleRecovery} className="space-y-4">
                    <div className="bg-yellow-500/10 border border-yellow-500/20 p-3 rounded text-xs text-yellow-200 flex gap-2 items-start mb-4">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Use the Master Recovery Key (Default: MoradoRoot) to reset credentials.</span>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Master Recovery Key</label>
                        <input 
                        type="password" 
                        value={recoveryKey}
                        onChange={(e) => setRecoveryKey(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-md p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">New Login ID</label>
                        <input 
                        type="text" 
                        value={newRecId}
                        onChange={(e) => setNewRecId(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-md p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">New Password</label>
                        <input 
                        type="text" 
                        value={newRecPass}
                        onChange={(e) => setNewRecPass(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-md p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        />
                    </div>
                    
                    {recoveryMsg && <p className={`text-sm ${recoveryMsg.includes('Success') ? 'text-green-500' : 'text-red-500'}`}>{recoveryMsg}</p>}
                    
                    <div className="flex gap-2 pt-2">
                        <Button type="button" variant="outline" onClick={() => setIsForgotPassword(false)} className="flex-1 border-zinc-700 hover:bg-zinc-800 text-white">Cancel</Button>
                        <Button type="submit" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">Reset & Login</Button>
                    </div>
                </form>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  // --- DASHBOARD ---
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 bg-zinc-900/50 flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-zinc-800 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <MoradoLogo className="w-8 h-8" />
          <span className="font-bold tracking-tight">Admin Panel</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <SidebarItem active={activeTab === 'plans'} onClick={() => setActiveTab('plans')} icon={Shield} label="Main Plans" />
          <SidebarItem active={activeTab === 'proxy'} onClick={() => setActiveTab('proxy')} icon={Globe} label="Proxy Plans" />
          <SidebarItem active={activeTab === 'dev'} onClick={() => setActiveTab('dev')} icon={Save} label="Dev Plans" />
          <SidebarItem active={activeTab === 'faqs'} onClick={() => setActiveTab('faqs')} icon={CheckCircle} label="FAQs" />
          <SidebarItem active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} icon={Key} label="Admin Settings" />
        </nav>
        <div className="p-4 border-t border-zinc-800">
          <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10" onClick={logout}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {activeTab === 'plans' && 'Manage Hosting Plans'}
              {activeTab === 'proxy' && 'Manage Proxy Networks'}
              {activeTab === 'dev' && 'Manage Dev Services'}
              {activeTab === 'faqs' && 'Manage FAQs'}
              {activeTab === 'settings' && 'Admin Credentials'}
            </h1>
            <p className="text-zinc-400">Make real-time updates to your live website.</p>
          </header>

          {activeTab === 'plans' && (
            <PlansEditor data={tiers} onSave={updateTiers} hideYearly={true} />
          )}

          {activeTab === 'proxy' && (
            <PlansEditor data={proxyTiers} onSave={updateProxyTiers} hideYearly={true} />
          )}

          {activeTab === 'dev' && (
            <PlansEditor data={serverDevTiers} onSave={updateServerDevTiers} hideYearly={true} />
          )}
          
          {activeTab === 'faqs' && (
             <FaqEditor data={faqs} onSave={updateFaqs} />
          )}

          {activeTab === 'settings' && (
             <SettingsEditor onUpdate={updateCredentials} />
          )}
        </div>
      </main>
    </div>
  );
}

// --- SUB COMPONENTS ---

const SidebarItem = ({ active, onClick, icon: Icon, label }: any) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
      active ? 'bg-purple-600/10 text-purple-400' : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
    }`}
  >
    <Icon className="w-4 h-4" />
    {label}
  </button>
);

const PlansEditor = ({ data, onSave, hideYearly }: any) => {
  const [localData, setLocalData] = useState<any[]>(JSON.parse(JSON.stringify(data)));
  const [toast, setToast] = useState('');

  const handleUpdate = (index: number, field: string, value: any) => {
    const newData = [...localData];
    // Deep update for price object
    if (field.includes('.')) {
        const [parent, child] = field.split('.');
        newData[index][parent] = { ...newData[index][parent], [child]: value };
    } else {
        newData[index][field] = value;
    }
    setLocalData(newData);
  };

  const handleFeatureUpdate = (planIndex: number, featureIndex: number, value: string) => {
    const newData = [...localData];
    newData[planIndex].features[featureIndex] = value;
    setLocalData(newData);
  };

  const addFeature = (planIndex: number) => {
    const newData = [...localData];
    newData[planIndex].features.push("New Feature");
    setLocalData(newData);
  }

  const removeFeature = (planIndex: number, featureIndex: number) => {
    const newData = [...localData];
    newData[planIndex].features.splice(featureIndex, 1);
    setLocalData(newData);
  }

  const save = () => {
    onSave(localData);
    setToast('Changes saved successfully!');
    setTimeout(() => setToast(''), 3000);
  };

  return (
    <div className="space-y-8">
      {localData.map((plan, i) => (
        <Card key={i} className="bg-zinc-900 border-zinc-800">
          <CardHeader className="border-b border-zinc-800 pb-4">
            <div className="flex justify-between items-center">
              <input 
                value={plan.name} 
                onChange={(e) => handleUpdate(i, 'name', e.target.value)}
                className="bg-transparent text-xl font-bold text-white border-none focus:ring-0 p-0 w-1/2"
              />
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">{plan.id}</span>
            </div>
            <input 
                value={plan.description} 
                onChange={(e) => handleUpdate(i, 'description', e.target.value)}
                className="bg-transparent text-sm text-zinc-400 border-none focus:ring-0 p-0 w-full"
            />
          </CardHeader>
          <CardContent className="pt-6 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
               <h4 className="text-xs uppercase text-zinc-500 font-semibold mb-2">Pricing</h4>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="text-xs text-zinc-400">Monthly Price (Numbers only for currency format, or text for 'Free')</label>
                    <input 
                        type="text"
                        value={plan.price.monthly}
                        onChange={(e) => handleUpdate(i, 'price.monthly', isNaN(Number(e.target.value)) ? e.target.value : Number(e.target.value))}
                        className="w-full bg-black border border-zinc-700 rounded p-2 text-white text-sm"
                    />
                 </div>
                 {!hideYearly && (
                     <div>
                        <label className="text-xs text-zinc-400">Yearly Price</label>
                        <input 
                            type="text"
                            value={plan.price.yearly || ''}
                            onChange={(e) => handleUpdate(i, 'price.yearly', isNaN(Number(e.target.value)) ? e.target.value : Number(e.target.value))}
                            className="w-full bg-black border border-zinc-700 rounded p-2 text-white text-sm"
                        />
                    </div>
                 )}
               </div>
               
               <h4 className="text-xs uppercase text-zinc-500 font-semibold mt-6 mb-2">Settings</h4>
               <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm text-zinc-300">
                      <input 
                        type="checkbox" 
                        checked={plan.popular || false} 
                        onChange={(e) => handleUpdate(i, 'popular', e.target.checked)}
                      />
                      Is Popular?
                  </label>
                  <label className="flex items-center gap-2 text-sm text-zinc-300">
                      <input 
                        type="checkbox" 
                        checked={plan.highlighted || false} 
                        onChange={(e) => handleUpdate(i, 'highlighted', e.target.checked)}
                      />
                      Is Highlighted?
                  </label>
               </div>
            </div>

            <div>
               <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs uppercase text-zinc-500 font-semibold">Features</h4>
                  <button onClick={() => addFeature(i)} className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1">
                      <Plus className="w-3 h-3" /> Add
                  </button>
               </div>
               <ul className="space-y-2">
                  {plan.features.map((feature: string, fIdx: number) => (
                      <li key={fIdx} className="flex gap-2 items-center">
                          <input 
                             value={feature}
                             onChange={(e) => handleFeatureUpdate(i, fIdx, e.target.value)}
                             className="flex-1 bg-black border border-zinc-700 rounded p-1.5 text-sm text-zinc-300"
                          />
                          <button onClick={() => removeFeature(i, fIdx)} className="text-zinc-600 hover:text-red-400">
                             <Trash2 className="w-4 h-4" />
                          </button>
                      </li>
                  ))}
               </ul>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="sticky bottom-4 flex justify-end">
        <div className="flex items-center gap-4 bg-zinc-900 p-2 rounded-lg border border-zinc-800 shadow-xl">
             {toast && <span className="text-green-500 text-sm font-medium animate-pulse">{toast}</span>}
             <Button onClick={save} className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
                <Save className="w-4 h-4" /> Save Changes
            </Button>
        </div>
      </div>
    </div>
  );
};

const FaqEditor = ({ data, onSave }: any) => {
    const [localData, setLocalData] = useState<any[]>(JSON.parse(JSON.stringify(data)));
    const [toast, setToast] = useState('');
  
    const handleUpdate = (index: number, field: string, value: string) => {
      const newData = [...localData];
      newData[index][field] = value;
      setLocalData(newData);
    };

    const addFaq = () => {
        setLocalData([...localData, { q: "New Question?", a: "New Answer." }]);
    };

    const removeFaq = (index: number) => {
        const newData = [...localData];
        newData.splice(index, 1);
        setLocalData(newData);
    };

    const save = () => {
        onSave(localData);
        setToast('FAQs saved successfully!');
        setTimeout(() => setToast(''), 3000);
    };

    return (
        <div className="space-y-6">
            {localData.map((item, i) => (
                <Card key={i} className="bg-zinc-900 border-zinc-800">
                    <CardHeader className="pb-2">
                        <div className="flex justify-between">
                             <label className="text-xs text-zinc-500 uppercase">Question</label>
                             <button onClick={() => removeFaq(i)} className="text-red-500 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                        </div>
                        <input 
                            value={item.q}
                            onChange={(e) => handleUpdate(i, 'q', e.target.value)}
                            className="w-full bg-black border border-zinc-700 rounded p-2 text-white font-medium"
                        />
                    </CardHeader>
                    <CardContent>
                        <label className="text-xs text-zinc-500 uppercase block mb-1">Answer</label>
                        <textarea 
                            value={item.a}
                            onChange={(e) => handleUpdate(i, 'a', e.target.value)}
                            className="w-full bg-black border border-zinc-700 rounded p-2 text-zinc-300 text-sm h-24"
                        />
                    </CardContent>
                </Card>
            ))}
            <Button onClick={addFaq} variant="outline" className="w-full border-dashed border-zinc-700 text-zinc-400 hover:text-white">
                <Plus className="w-4 h-4 mr-2" /> Add FAQ
            </Button>
            
            <div className="sticky bottom-4 flex justify-end">
                <div className="flex items-center gap-4 bg-zinc-900 p-2 rounded-lg border border-zinc-800 shadow-xl">
                    {toast && <span className="text-green-500 text-sm font-medium animate-pulse">{toast}</span>}
                    <Button onClick={save} className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
                        <Save className="w-4 h-4" /> Save Changes
                    </Button>
                </div>
            </div>
        </div>
    )
}

const SettingsEditor = ({ onUpdate }: any) => {
    const [id, setId] = useState('moradosolution1122');
    const [pass, setPass] = useState('');
    const [msg, setMsg] = useState('');

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!pass) {
            setMsg('Password cannot be empty');
            return;
        }
        onUpdate(id, pass);
        setMsg('Credentials updated successfully. Please re-login next time.');
    }

    return (
        <Card className="max-w-xl bg-zinc-900 border-zinc-800">
            <CardHeader>
                <CardTitle className="text-white">Update Admin Credentials</CardTitle>
                <CardDescription>Change the login ID and password for the admin panel.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm text-zinc-400">New Login ID</label>
                        <input 
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            className="w-full bg-black border border-zinc-700 rounded p-2 text-white"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-zinc-400">New Password</label>
                        <input 
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            placeholder="New secure password"
                            className="w-full bg-black border border-zinc-700 rounded p-2 text-white"
                        />
                    </div>
                    {msg && <p className="text-green-500 text-sm">{msg}</p>}
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                        Update Credentials
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}